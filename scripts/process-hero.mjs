import sharp from 'sharp';
import fs from 'fs';

const src = '/home/z/my-project/upload/481049619_606823318989457_217814044980380800_n.jpg';
const outDir = '/home/z/my-project/public';

// Get original dimensions
const meta = await sharp(src).metadata();
console.log('Original:', meta.width, 'x', meta.height);

// Desktop hero — 1920x1080 cover
await sharp(src)
  .resize({ width: 1920, height: 1080, fit: 'cover', position: 'center' })
  .jpeg({ quality: 82, progressive: true, mozjpeg: true })
  .toFile(`${outDir}/hero-festival.jpg`);

// Tablet — 1280x900
await sharp(src)
  .resize({ width: 1280, height: 900, fit: 'cover', position: 'center' })
  .jpeg({ quality: 80, progressive: true, mozjpeg: true })
  .toFile(`${outDir}/hero-festival-tablet.jpg`);

// Mobile — 800x1200 (portrait orientation, focus on the busy festival area)
await sharp(src)
  .resize({ width: 800, height: 1200, fit: 'cover', position: 'center' })
  .jpeg({ quality: 78, progressive: true, mozjpeg: true })
  .toFile(`${outDir}/hero-festival-mobile.jpg`);

// Darkened variant — pre-darkened for better text contrast (avoids heavy CSS filters)
await sharp(src)
  .resize({ width: 1920, height: 1080, fit: 'cover', position: 'center' })
  .modulate({ brightness: 0.65, saturation: 0.9 })
  .jpeg({ quality: 82, progressive: true, mozjpeg: true })
  .toFile(`${outDir}/hero-festival-dark.jpg`);

const sizes = ['hero-festival.jpg', 'hero-festival-tablet.jpg', 'hero-festival-mobile.jpg', 'hero-festival-dark.jpg'];
for (const f of sizes) {
  const stat = fs.statSync(`${outDir}/${f}`);
  console.log(`✓ ${f}  ${(stat.size / 1024).toFixed(0)} KB`);
}
