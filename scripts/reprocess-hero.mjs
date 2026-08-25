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

console.log(`Reprocessing ${files.length} hero images with better fit`);

for (let i = 0; i < files.length; i++) {
  const src = path.join(srcDir, files[i]);
  const num = String(i + 1).padStart(2, '0');
  const outPath = path.join(outDir, `hero-${num}.jpg`);

  // Get original dimensions to determine orientation
  const meta = await sharp(src).metadata();
  const isPortrait = meta.height > meta.width;

  if (isPortrait) {
    // For portrait photos: resize to fit height (1920 tall), keep aspect ratio
    // The bg-cover in CSS will then position the image to fill the screen
    await sharp(src)
      .resize({ width: 1080, height: 1920, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(outPath);
  } else {
    // For landscape photos: resize to 1920 wide, keep aspect ratio (no cropping)
    await sharp(src)
      .resize({ width: 1920, withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(outPath);
  }

  const stat = fs.statSync(outPath);
  console.log(`✓ hero-${num}.jpg — ${(stat.size / 1024).toFixed(0)} KB ${isPortrait ? '(portrait)' : '(landscape)'}`);
}
console.log('\n✓ All hero images reprocessed with aspect-ratio-preserving fit');
