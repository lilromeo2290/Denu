import sharp from 'sharp';
import fs from 'fs';

const outDir = '/home/z/my-project/public';
const W = 1200, H = 630;

// Helper: create a solid-color blurred PNG for glow effects
async function glow(w, h, color) {
  return await sharp({
    create: { width: w, height: h, channels: 4, background: color }
  })
    .blur(80)
    .png()
    .toBuffer();
}

async function buildOgImage() {
  // 1. Base forest-green background
  const bg = await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: { r: 0, g: 48, b: 24, alpha: 1 }, // #003018
    }
  }).png().toBuffer();

  // 2. Glows (each smaller than W x H)
  const goldGlow = await glow(600, 600, { r: 240, g: 168, b: 72, alpha: 0.22 });
  const greenGlow = await glow(400, 400, { r: 15, g: 92, b: 51, alpha: 0.55 });

  // 3. Logo: resize so height = 460, preserving aspect ratio
  const logoResized = await sharp('/home/z/my-project/upload/logo.jpg')
    .resize({ height: 460, fit: 'inside' })
    .png()
    .toBuffer();
  const logoMeta = await sharp(logoResized).metadata();

  // 4. Gold kente strip
  const goldStrip = await sharp({
    create: { width: W, height: 14, channels: 4, background: { r: 240, g: 168, b: 72, alpha: 1 } }
  }).png().toBuffer();

  // 5. Composite everything in order: bg → glows → logo → strip
  await sharp(bg)
    .composite([
      { input: goldGlow, gravity: 'southeast', blend: 'over' },
      { input: greenGlow, gravity: 'northwest', blend: 'over' },
      { input: logoResized, gravity: 'center', blend: 'over' },
      { input: goldStrip, gravity: 'south', blend: 'over' },
    ])
    .jpeg({ quality: 90, progressive: true, mozjpeg: true })
    .toFile(`${outDir}/og-image.jpg`);

  const stat = fs.statSync(`${outDir}/og-image.jpg`);
  console.log(`✓ og-image.jpg — ${(stat.size / 1024).toFixed(0)} KB (1200×630)`);
}

async function buildSquare() {
  await sharp('/home/z/my-project/upload/logo.jpg')
    .resize({ width: 512, height: 512, fit: 'cover', position: 'center' })
    .jpeg({ quality: 90, progressive: true, mozjpeg: true })
    .toFile(`${outDir}/og-image-square.jpg`);
  console.log('✓ og-image-square.jpg (512×512)');
}

await buildOgImage();
await buildSquare();
