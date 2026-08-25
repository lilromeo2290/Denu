import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcDir = '/home/z/my-project/upload/pics-extracted/pics';
const outDir = '/home/z/my-project/public/gallery';

// Clear any existing gallery images
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true });
}
fs.mkdirSync(outDir, { recursive: true });

// Collect all image files
const files = fs.readdirSync(srcDir)
  .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
  .sort();

console.log(`Found ${files.length} images to process`);

// Process each: resize to max 1200px wide, cover-crop to 4:3, compress
const items = [];
for (let i = 0; i < files.length; i++) {
  const src = path.join(srcDir, files[i]);
  const num = String(i + 1).padStart(2, '0');
  const outPath = path.join(outDir, `g-${num}.jpg`);

  await sharp(src)
    .resize({ width: 1200, height: 900, fit: 'cover', position: 'center' })
    .jpeg({ quality: 78, progressive: true, mozjpeg: true })
    .toFile(outPath);

  const stat = fs.statSync(outPath);
  console.log(`✓ g-${num}.jpg — ${(stat.size / 1024).toFixed(0)} KB`);
  items.push(`/gallery/g-${num}.jpg`);
}

// Save the list for the gallery component to consume
fs.writeFileSync(
  '/home/z/my-project/public/gallery/manifest.json',
  JSON.stringify(items, null, 2)
);
console.log(`\n✓ Manifest written with ${items.length} images`);
