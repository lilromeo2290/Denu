import sharp from 'sharp';
import fs from 'fs';

const srcFiles = [
  '/home/z/my-project/upload/671649192_26303796329312343_2569162874035656837_n.jpg',
  '/home/z/my-project/upload/677777652_1435902048563684_2088983476417664494_n.jpg',
  '/home/z/my-project/upload/714780492_1047680310922788_5267033116281740002_n.jpg',
];

const outDir = '/home/z/my-project/public/border';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

for (let i = 0; i < srcFiles.length; i++) {
  const src = srcFiles[i];
  const outPath = `${outDir}/border-${i + 1}.jpg`;
  await sharp(src)
    .resize({ width: 1200, height: 900, fit: 'cover', position: 'center' })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(outPath);
  const stat = fs.statSync(outPath);
  console.log(`✓ border-${i + 1}.jpg — ${(stat.size / 1024).toFixed(0)} KB`);
}
