import sharp from 'sharp';
import fs from 'fs';

const srcFiles = [
  '/home/z/my-project/upload/515500754_30189504374008110_5409740903425160977_n.jpg',
  '/home/z/my-project/upload/515505564_30189504734008074_3839783182015280879_n.jpg',
  '/home/z/my-project/upload/515509939_30189504754008072_6774254872333907398_n.jpg',
  '/home/z/my-project/upload/515512662_30189504744008073_6041227192239033101_n.jpg',
];

const outDir = '/home/z/my-project/public/slavery';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

for (let i = 0; i < srcFiles.length; i++) {
  const src = srcFiles[i];
  const outPath = `${outDir}/slavery-${i + 1}.jpg`;
  await sharp(src)
    .resize({ width: 1200, height: 900, fit: 'cover', position: 'center' })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(outPath);
  const stat = fs.statSync(outPath);
  console.log(`✓ slavery-${i + 1}.jpg — ${(stat.size / 1024).toFixed(0)} KB`);
}
