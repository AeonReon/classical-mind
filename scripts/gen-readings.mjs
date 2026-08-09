// Generate MP3s for The Reading Room from assets/readings-data.js via the local
// Kokoro engine. Usage: node scripts/gen-readings.mjs   (run from app root)
// Writes assets/readings/<id>.mp3. Skips ids that already exist (delete to redo).
import fs from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const KOKORO = 'http://localhost:8765/api/tts';
const OUT = path.join(ROOT, 'assets', 'readings');
const TMP = '/tmp/cm-readings';
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

// load window.READINGS
const win = {};
global.window = win;
await import('file://' + path.join(ROOT, 'assets', 'readings-data.js'));
const READINGS = win.READINGS || [];
console.log('readings:', READINGS.length);

for (const r of READINGS) {
  const mp3 = path.join(OUT, r.id + '.mp3');
  if (fs.existsSync(mp3) && !process.argv.includes('--force')) { console.log('skip', r.id); continue; }
  const res = await fetch(KOKORO, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: r.text, voice: r.voice || 'am_echo', speed: 1.0 })
  });
  if (!res.ok) { console.error('FAIL', r.id, res.status); continue; }
  const wav = path.join(TMP, r.id + '.wav');
  fs.writeFileSync(wav, Buffer.from(await res.arrayBuffer()));
  execSync(`ffmpeg -y -i "${wav}" -c:a libmp3lame -b:a 96k -ar 24000 "${mp3}" -loglevel error`);
  const kb = Math.round(fs.statSync(mp3).size / 1024);
  console.log('ok', r.id, r.voice, kb + 'kb');
}
console.log('DONE readings');
