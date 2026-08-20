#!/usr/bin/env node
// check-videos.mjs — verify every curated video in assets/videos-data.js.
//
// Videos rot: they go private, get deleted, get region-locked, or the creator
// turns embedding off — and a dead embed is worse than no embed, because the
// page still looks like it works until you press play.
//
// Checks each id for: still public, still embeddable, and refreshes the real
// view count. No API key needed.
//
//   node scripts/check-videos.mjs          report only
//   node scripts/check-videos.mjs --write   also update the `views` numbers
//
// Exit code 1 if anything is broken, so it can be wired to a cron later.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'assets', 'videos-data.js');
const WRITE = process.argv.includes('--write');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

// videos-data.js assigns to window, so give it a window and eval it.
const src = fs.readFileSync(DATA, 'utf8');
const window = {};
new Function('window', src)(window);

async function check(id) {
  const r = await fetch(`https://www.youtube.com/watch?v=${id}`, {
    headers: { 'User-Agent': UA, 'Accept-Language': 'en-GB,en;q=0.9' }
  });
  if (!r.ok) return { ok: false, reason: `HTTP ${r.status}` };
  const html = await r.text();

  const status = html.match(/"status":"(\w+)"/)?.[1];
  if (status && status !== 'OK') {
    const why = html.match(/"reason":\{"simpleText":"(.*?)"/)?.[1] || status;
    return { ok: false, reason: why };
  }
  if (/"playableInEmbed":false/.test(html)) return { ok: false, reason: 'embedding disabled by the creator' };

  return {
    ok: true,
    views: Number(html.match(/"viewCount":"(\d+)"/)?.[1] || 0),
    title: html.match(/"title":\{"simpleText":"(.*?)"/)?.[1] || '',
    embeddable: /"playableInEmbed":true/.test(html)
  };
}

let broken = 0, updated = 0, out = src;

for (const [topic, group] of Object.entries(window.VIDEOS)) {
  console.log(`\n${topic}`);
  for (const v of group.items) {
    const res = await check(v.id);
    if (!res.ok) {
      broken++;
      console.log(`  BROKEN  ${v.id}  ${v.channel} — ${v.title}\n          → ${res.reason}`);
      continue;
    }
    const drift = v.views ? Math.round(((res.views - v.views) / v.views) * 100) : 0;
    console.log(`  ok      ${v.id}  ${String(res.views).padStart(9)} views  ${drift >= 0 ? '+' : ''}${drift}%  ${v.channel}`);
    if (WRITE && res.views && res.views !== v.views) {
      out = out.replace(new RegExp(`(id: '${v.id}',[\\s\\S]*?views: )\\d+`), `$1${res.views}`);
      updated++;
    }
  }
}

if (WRITE && updated) { fs.writeFileSync(DATA, out); console.log(`\nrefreshed ${updated} view counts in assets/videos-data.js`); }
console.log(broken ? `\n${broken} broken — fix before deploying.` : `\nAll videos live and embeddable.`);
process.exit(broken ? 1 : 0);
