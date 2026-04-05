const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');
// prefer explicit ATY0 logo if present, otherwise fall back to common app icons
const possibleSources = [
  'aty0-logo.png',
  'aty0-logo.webp',
  'apple-touch-icon.png',
  'android-chrome-512x512.png',
  'favicon-32x32.png',
  'icon.svg'
].map(f => path.join(PUBLIC, f));

let LOGO_PNG = null;
for (const p of possibleSources) {
  if (fs.existsSync(p)) { LOGO_PNG = p; break; }
}
const OUT_PNG = path.join(PUBLIC, 'og-image.png');
const OUT_WEBP = path.join(PUBLIC, 'og-image.webp');

async function run(){
  if(!LOGO_PNG || !fs.existsSync(LOGO_PNG)){
    console.error('Logo source not found. Searched:', possibleSources.join(', '));
    process.exit(1);
  }

  const width = 1200;
  const height = 630;

  // background SVG (linear gradient)
  const bgSvg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <linearGradient id=\"g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop offset=\"0%\" stop-color=\"#052b2d\"/>\n      <stop offset=\"100%\" stop-color=\"#0b6b6b\"/>\n    </linearGradient>\n  </defs>\n  <rect width=\"100%\" height=\"100%\" fill=\"url(#g)\" />\n</svg>`;

  // Prepare logo resized
  const logoBuf = await sharp(LOGO_PNG).resize({width: 680, height: 340, fit: 'inside'}).png().toBuffer();

  // Text overlay as SVG (title)
  let title = 'ATY0 — Jasa Pembuatan Website & Aplikasi Mobile';
  // escape XML entities
  title = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const textSvg = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"${width}\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\">\n  <style>\n    .t{font-family:Inter, system-ui, Arial, sans-serif; font-size:36px; fill:#e6ffff; font-weight:600}\n  </style>\n  <text x=\"50%\" y=\"50%\" text-anchor=\"middle\" class=\"t\">${title}</text>\n</svg>`;
  const textBuf = Buffer.from(textSvg);

  // Compose: background + logo centered + text at bottom
  const composed = await sharp(Buffer.from(bgSvg))
    .composite([
      { input: logoBuf, gravity: 'north' },
      { input: textBuf, gravity: 'south' }
    ])
    .png({ quality: 90 })
    .toFile(OUT_PNG);

  // Also write webp
  await sharp(OUT_PNG).webp({quality: 80}).toFile(OUT_WEBP);

  console.log('OG images written:', OUT_PNG, OUT_WEBP);
}

run().catch(err=>{console.error(err); process.exit(1);});
