import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcDir = '/home/z/my-project/upload/hero-extracted/hero';
const outDir = '/home/z/my-project/public/hero';

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true });
}
fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(srcDir)
  .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
  .sort();

console.log(`Found ${files.length} hero images`);

// Process each: resize to 1920x1080 cover-crop (widescreen for full-screen hero)
// Use higher quality than gallery since these are full-screen backgrounds
for (let i = 0; i < files.length; i++) {
  const src = path.join(srcDir, files[i]);
  const num = String(i + 1).padStart(2, '0');
  const outPath = path.join(outDir, `hero-${num}.jpg`);

  await sharp(src)
    .resize({ width: 1920, height: 1080, fit: 'cover', position: 'center' })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(outPath);

  const stat = fs.statSync(outPath);
  console.log(`✓ hero-${num}.jpg — ${(stat.size / 1024).toFixed(0)} KB`);
}
console.log('\n✓ All hero images processed');
