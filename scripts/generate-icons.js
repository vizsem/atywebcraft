const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
let pngToIco = require('png-to-ico');
// some bundlers/export styles expose default
pngToIco = pngToIco && (pngToIco.default || pngToIco);

const PUBLIC = path.join(__dirname, '..', 'public');
const SRC = path.join(PUBLIC, 'aty0-logo.svg');

if (!fs.existsSync(SRC)) {
  console.error('Source SVG not found at', SRC);
  process.exit(1);
}

async function run() {
  try {
    // sizes to generate
    const sizes = [192, 128, 64, 48, 32, 16];
    const pngOutputs = [];

    for (const size of sizes) {
      const out = path.join(PUBLIC, `aty0-favicon-${size}.png`);
      await sharp(SRC)
        .resize(size, size, { fit: 'cover' })
        .png({ quality: 90 })
        .toFile(out);
      pngOutputs.push(out);
      console.log('written', out);
    }

    // full-res optimized PNG
    const logoPng = path.join(PUBLIC, 'aty0-logo.png');
    await sharp(SRC).png({ quality: 90 }).toFile(logoPng);
    console.log('written', logoPng);

    // webp
    const logoWebp = path.join(PUBLIC, 'aty0-logo.webp');
    await sharp(SRC).webp({ quality: 80 }).toFile(logoWebp);
    console.log('written', logoWebp);

    // create favicon.ico from 64 and 32 PNGs
    const icoPath = path.join(PUBLIC, 'favicon.ico');
    const icoPngs = [
      path.join(PUBLIC, 'aty0-favicon-64.png'),
      path.join(PUBLIC, 'aty0-favicon-32.png')
    ];
    // pngToIco returns a Promise that resolves to a Buffer
    const icoBuffer = await pngToIco(icoPngs);
    fs.writeFileSync(icoPath, icoBuffer);
    console.log('written', icoPath);

    console.log('All icons generated successfully.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
