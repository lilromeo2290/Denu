import sharp from 'sharp';
import fs from 'fs';

const src = '/home/z/my-project/upload/homecoming.jpeg';
const outDir = '/home/z/my-project/public';

const meta = await sharp(src).metadata();
console.log('Original:', meta.width, 'x', meta.height);

// Web-optimized version: 1200px wide, cover-cropped to 4:5 portrait (matches the existing About image aspect ratio)
await sharp(src)
  .resize({ width: 1000, height: 1250, fit: 'cover', position: 'center' })
  .jpeg({ quality: 85, progressive: true, mozjpeg: true })
  .toFile(`${outDir}/homecoming.jpg`);

const stat = fs.statSync(`${outDir}/homecoming.jpg`);
console.log(`✓ homecoming.jpg generated — ${(stat.size / 1024).toFixed(0)} KB`);
