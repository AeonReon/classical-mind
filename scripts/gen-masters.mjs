// Generate spoken-profile MP3s for The Great Minds from assets/masters-data.js
// via the local Kokoro engine. Recorded audio = works on any device (incl. the
// Boox and iPhone) with a good voice, unlike the browser's speech engine.
// Usage: node scripts/gen-masters.mjs [--force]   (run from app root)
import fs from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const KOKORO = 'http://localhost:8765/api/tts';
const OUT = path.join(ROOT, 'assets', 'masters');
const TMP = '/tmp/cm-masters';
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

// A dignified voice per era, for a little variety.
const VOICE = {
  'Ancient Greece': 'am_echo',
  'Ancient Rome': 'am_liam',
  'The Middle Ages': 'am_adam',
  'Keepers of the Tradition': 'am_michael'
};

function profileText(m) {
  let t = m.name + '. ' + (m.epithet ? m.epithet + '. ' : '') + (m.hook || '') + ' ';
  (m.sections || []).forEach(s => {
    if (s.h) t += s.h + '. ';
    if (s.body) t += s.body + ' ';
    if (s.bullets) t += s.bullets.join('. ') + '. ';
  });
  return t;
}

const win = {};
global.window = win;
await import('file://' + path.join(ROOT, 'assets', 'masters-data.js'));
const MASTERS = win.MASTERS || [];
console.log('masters:', MASTERS.length);

for (const m of MASTERS) {
  const mp3 = path.join(OUT, m.id + '.mp3');
  if (fs.existsSync(mp3) && !process.argv.includes('--force')) { console.log('skip', m.id); continue; }
  const voice = VOICE[m.era] || 'am_echo';
  const res = await fetch(KOKORO, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: profileText(m), voice, speed: 1.0 })
  });
  if (!res.ok) { console.error('FAIL', m.id, res.status); continue; }
  const wav = path.join(TMP, m.id + '.wav');
  fs.writeFileSync(wav, Buffer.from(await res.arrayBuffer()));
  execSync(`ffmpeg -y -i "${wav}" -c:a libmp3lame -b:a 96k -ar 24000 "${mp3}" -loglevel error`);
  console.log('ok', m.id, voice, Math.round(fs.statSync(mp3).size / 1024) + 'kb');
}
console.log('DONE masters');
