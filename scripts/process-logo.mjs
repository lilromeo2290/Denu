import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const src = '/home/z/my-project/upload/logo.jpg';
const outDir = '/home/z/my-project/public';
fs.mkdirSync(outDir, { recursive: true });

// Get metadata first
const meta = await sharp(src).metadata();
console.log('Source metadata:', meta);

// 1. Full logo with original background (for places needing the full brand mark)
await sharp(src)
  .resize({ width: 1024, withoutEnlargement: true })
  .png({ quality: 95, compressionLevel: 9 })
  .toFile(path.join(outDir, 'logo-full.png'));

// 2. Square logo, padded & rounded for avatar/circle use (forest green bg)
await sharp(src)
  .resize({ width: 512, height: 512, fit: 'cover', position: 'center' })
  .png({ quality: 95 })
  .toFile(path.join(outDir, 'logo-square.png'));

// 3. Compact horizontal logo for navbar (white/transparent bg via flatten with white)
// We flatten onto a transparent PNG by first removing the green background.
// Simpler: extract a tighter crop of the central icon area for the crest.
// The logo is roughly square; for the navbar crest we'll just use the square.

// 4. Favicon-ready 64x64
await sharp(src)
  .resize({ width: 64, height: 64, fit: 'cover', position: 'center' })
  .png()
  .toFile(path.join(outDir, 'logo-favicon.png'));

// 5. Generate a logo variant on transparent background by chroma-keying out the green.
// Use sharp to extract just non-green pixels (approximate).
const buffer = await sharp(src)
  .resize({ width: 800, withoutEnlargement: true })
  .raw()
  .toBuffer({ resolveWithObject: true });

const { data, info } = buffer;
const { width, height, channels } = info;
// Channels: RGB (3) — convert to RGBA
const out = Buffer.alloc(width * height * 4);
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  // Detect forest-green dominant pixels (g > r && g > b && g < 100 && r < 80)
  const isGreen = g > r + 10 && g > b + 10 && g < 110 && r < 90;
  if (isGreen) {
    out[j] = 0; out[j + 1] = 0; out[j + 2] = 0; out[j + 3] = 0; // transparent
  } else {
    out[j] = r; out[j + 1] = g; out[j + 2] = b; out[j + 3] = 255;
  }
}
await sharp(out, { raw: { width, height, channels: 4 } })
  .png()
  .toFile(path.join(outDir, 'logo-transparent.png'));

console.log('✓ All logo variants generated:');
console.log('  /public/logo-full.png       — full logo (original green bg)');
console.log('  /public/logo-square.png     — 512x512 square');
console.log('  /public/logo-favicon.png    — 64x64 favicon');
console.log('  /public/logo-transparent.png — logo with green chroma-keyed to transparent');
