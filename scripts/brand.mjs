// Regenerates public/ brand assets (OG images, app icons, favicon.ico) by
// screenshotting HTML in headless Chrome, so the real Funnel fonts are used.
// Usage: bun scripts/brand.mjs
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { dictionaries, locales } from "../src/i18n/content.ts";

const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const pub = new URL("../public/", import.meta.url).pathname;
const tmp = mkdtempSync(join(tmpdir(), "brand-"));

const c = {
  paper: "#f7f8fa",
  ink: "#14161c",
  muted: "#646a78",
  rule: "#e2e5ea",
  margin: "#f7d4b0",
  border: "#fbe5b2",
  padding: "#d4dfa8",
  content: "#b8d5de",
};

const fonts = `<link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@500;600;700&family=Funnel+Sans:wght@400;500&family=IBM+Plex+Mono&family=Inter:wght@400;600&family=Kalam:wght@700&display=block" rel="stylesheet">`;

function shoot(name, html, w, h, scale = 1) {
  const file = join(tmp, `${name}.html`);
  writeFileSync(file, `<!doctype html><meta charset="utf-8">${fonts}<style>*{margin:0;box-sizing:border-box}html,body{width:${w}px;height:${h}px;overflow:hidden}</style>${html}`);
  const out = join(pub, `${name}.png`);
  execFileSync(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--default-background-color=00000000",
    `--force-device-scale-factor=${scale}`,
    "--virtual-time-budget=5000",
    `--window-size=${w},${h}`,
    `--screenshot=${out}`,
    `file://${file}`,
  ], { stdio: "ignore" });
  return out;
}

// The box-model mark: margin > border > padding > content, as in the hero.
// `pad` is each layer's inset as a fraction of the size.
function mark(size, { radius = 0.22, pad = 0.1, bleed = false } = {}) {
  const s = (f) => `${Math.round(size * f)}px`;
  return `<div style="width:${size}px;height:${size}px;background:${c.margin};${bleed ? "" : `border-radius:${s(radius)};`}padding:${s(pad)}">
    <div style="height:100%;background:${c.border};border-radius:${s(radius * 0.55)};padding:${s(pad * 0.9)}">
      <div style="height:100%;background:${c.padding};border-radius:${s(radius * 0.35)};padding:${s(pad * 0.9)}">
        <div style="height:100%;background:${c.content};border-radius:${s(radius * 0.2)};outline:${Math.max(1, Math.round(size / 64))}px solid ${c.ink}80"></div>
      </div>
    </div>
  </div>`;
}

const icon = (name, size, opts) => shoot(name, `<body style="background:transparent">${mark(size, opts)}`, size, size);

icon("icon-512", 512);
icon("icon-192", 192);
// maskable: full bleed, content kept inside the 80% safe zone
icon("icon-512-maskable", 512, { bleed: true, pad: 0.13 });
icon("icon-192-maskable", 192, { bleed: true, pad: 0.13 });
// iOS applies its own mask, so no radius
icon("apple-icon", 180, { bleed: true, pad: 0.1 });
const ico32 = icon("ico-32", 32, { pad: 0.09 });

// favicon.ico with a single embedded PNG (valid since Vista; all browsers read it)
const png = readFileSync(ico32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
writeFileSync(join(pub, "favicon.ico"), Buffer.concat([header, png]));
execFileSync("rm", [ico32]);

// OG image: a 420px box the name overflows, corrected in red pen, with a
// resolved review thread. One per locale; rendered at 2x (2400x1260).
const og = {
  en: { team: "Product", ask: "This header has been broken for weeks 😅 can you take a look?", done: "Done.", shipped: "shipped", resolved: "Resolved", note: "I fix these for a living." },
  pt: { team: "Produto", ask: "Esse header tá quebrado há semanas 😅 consegue dar uma olhada?", done: "Pronto.", shipped: "no ar", resolved: "Resolvido", note: "Eu vivo de consertar isso." },
  es: { team: "Producto", ask: "Este header lleva semanas roto 😅 ¿puedes echarle un vistazo?", done: "Listo.", shipped: "publicado", resolved: "Resuelto", note: "Vivo de arreglar esto." },
};
const p = { ink: "#16171b", red: "#d6372b", paper: "#f4f1ea", soft: "#5d5a52" };
const pen = (d, w = 3.2) =>
  `<path d="${d}" fill="none" stroke="${p.red}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" opacity=".92"/>`;
const avatar = (bg, letter) =>
  `<span style="flex:none;width:30px;height:30px;border-radius:50%;background:${bg};color:#fff;display:grid;place-items:center;font:600 14px Inter">${letter}</span>`;
const code = (text) => `<code style="font:13.5px 'IBM Plex Mono';background:#f1f1f1;padding:1px 5px;border-radius:4px">${text}</code>`;

for (const locale of locales) {
  const t = dictionaries[locale];
  const o = og[locale];
  shoot(
    `og-${locale}`,
    `<style>body{background:${p.paper};color:${p.ink};font-family:'Funnel Sans'}.a{position:absolute}.hand{font-family:Kalam;font-weight:700;color:${p.red};white-space:nowrap}
      .name{width:420px;white-space:nowrap}</style>
    <svg class="a" style="inset:0;opacity:.35;mix-blend-mode:multiply" width="1200" height="630"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .45  0 0 0 0 .4  0 0 0 0 .33  0 0 0 .55 0"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>

    <pre class="a" style="left:64px;top:64px;font:23px/1.6 'IBM Plex Mono'">.name {
  width: 420px;
  white-space: nowrap;
}</pre>
    <div class="hand a" style="left:226px;top:58px;font-size:30px;transform:rotate(-4deg)">fit-content</div>

    <svg class="a" style="inset:0" width="1200" height="630"><path d="M64 236 V256 M484 236 V256 M64 246 H240 M308 246 H484 M64 246 l8 -5 M64 246 l8 5 M484 246 l-8 -5 M484 246 l-8 5" stroke="${p.soft}" stroke-width="1.5" fill="none"/></svg>
    <span class="a" style="left:248px;top:236px;font:17px 'IBM Plex Mono';color:${p.soft}">420px</span>
    <!-- the font's own ã tilde sits off-centre, so it is placed by hand -->
    <div class="a name" style="left:64px;top:268px;font:700 250px/.9 'Funnel Display';letter-spacing:-.06em;background:#b8d5de99;box-shadow:inset 0 0 0 2px ${p.ink}">Jo<span style="position:relative;display:inline-block">a<span style="position:absolute;left:calc(50% + .045em);top:-.02em;transform:translateX(-50%);letter-spacing:0">˜</span></span>o Vitor</div>

    <svg class="a" style="inset:0" width="1200" height="630">
      ${pen("M182 121 C 205 119, 232 120, 256 118", 3)}
      ${pen("M500 250 C 650 228, 1100 232, 1215 240 M 500 250 C 486 320, 486 440, 506 506 C 700 520, 1050 518, 1215 510", 3.4)}
      ${pen("M780 562 C 740 552, 712 536, 700 514", 3)}${pen("M688 528 L700 512 L716 526", 3)}
    </svg>
    <div class="hand a" style="left:790px;top:540px;font-size:32px;transform:rotate(-2deg)">${o.note}</div>

    <div class="a" style="left:700px;top:46px;width:440px;background:#fff;border-radius:12px;box-shadow:0 1px 2px #0000001a,0 8px 28px #00000014;padding:16px 18px;font:16px/1.4 Inter;color:#1e1e1e;transform:rotate(1deg)">
      <div class="a" style="top:14px;right:16px;font:600 12px Inter;color:#14ae5c;background:#e8f7ee;padding:3px 8px;border-radius:999px">✓ ${o.resolved}</div>
      <div style="display:flex;gap:10px">${avatar("#7b61ff", "M")}<div><div style="font-size:14px"><b style="font-weight:600">Mark · ${o.team}</b> <span style="color:#8c8c8c">· 9:41</span></div><div style="margin-top:3px">${o.ask}</div></div></div>
      <div style="display:flex;gap:10px;margin-top:14px;padding-top:12px;border-top:1px solid #eee">${avatar(p.ink, "J")}<div><div style="font-size:14px"><b style="font-weight:600">João Vitor</b> <span style="color:#8c8c8c">· 9:44</span></div><div style="margin-top:3px">${o.done} ${code("420px")} → ${code("fit-content")}, ${o.shipped} ✅</div></div></div>
    </div>
    <div class="a" style="left:1050px;top:264px;width:34px;height:34px;border-radius:17px 17px 17px 3px;background:#7b61ff;border:2px solid #fff;box-shadow:0 2px 8px #0003;color:#fff;display:grid;place-items:center;font:600 14px Inter">M</div>
    <div class="a" style="left:64px;bottom:44px;font-size:20px;color:${p.soft}"><span style="color:${p.ink};font-weight:500">${t.role}</span> &nbsp;·&nbsp; joaovitorscr.com</div>`,
    1200,
    630,
    2,
  );
}

console.log("brand assets written to public/");
