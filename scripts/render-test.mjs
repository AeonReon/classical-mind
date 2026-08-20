// Render a page's inline script through a shim DOM and report blank output.
// usage: node render-generic.mjs <page.html> <dataFile,...> <query> [id...]
import fs from 'node:fs';
const [page, dataList, queryTpl, ...ids] = process.argv.slice(2);
const html = fs.readFileSync(page,'utf8');
const script = [...html.matchAll(/<script>\n([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n');
const files = dataList.split(',').filter(Boolean);

function el(){ const e={ innerHTML:'', textContent:'', style:{setProperty(){}}, dataset:{}, classList:{add(){},remove(){}},
  querySelectorAll:()=>[], querySelector:()=>null, addEventListener(){}, appendChild(){}, setAttribute(){},
  getAttribute:()=>null, replaceWith(){}, remove(){}, closest:()=>null, paused:true, play:()=>Promise.resolve() }; return e; }

let fails=0;
for (const id of (ids.length?ids:[''])) {
  const root = el();
  // Distinct element per id — returning one shared node lets a later
  // getElementById('...') clobber the page we are trying to inspect.
  const byId = new Map([['root', root]]);
  const getById = k => { if(!byId.has(k)) byId.set(k, el()); return byId.get(k); };
  const win = { location:{ search: queryTpl.replace('{id}', id), hash:'', href:'' },
    document:{ getElementById:getById, querySelector:()=>el(), querySelectorAll:()=>[], createElement:()=>el(),
      addEventListener(){}, title:'', documentElement:el(), body:el() },
    localStorage:{ getItem:()=>null, setItem(){}, removeItem(){} },
    addEventListener(){}, scrollTo(){}, history:{replaceState(){}}, navigator:{userAgent:'node'},
    ARTS:[], Reader:{ speaking:false, stop(){}, readElement(){} }, console };
  win.window = win;
  for (const f of files) new Function('window','document','localStorage', fs.readFileSync(f,'utf8'))(win, win.document, win.localStorage);
  try {
    new Function('window','document','location','localStorage','history','navigator','setTimeout','URLSearchParams',
      script)(win, win.document, win.location, win.localStorage, win.history, win.navigator, ()=>{}, URLSearchParams);
    const out = root.innerHTML || '';
    const ok = out.length > 400;
    if(!ok) fails++;
    console.log(`${ok?'ok  ':'FAIL'} ${(id||'(index)').padEnd(20)} html=${String(out.length).padStart(6)} watch=${/watch-play|op-vid-play|mm-vid-play/.test(out)?'yes':'no '}`);
  } catch(e){ fails++; console.log(`FAIL ${(id||'(index)').padEnd(20)} ${e.constructor.name}: ${e.message}`); }
}
process.exit(fails?1:0);
