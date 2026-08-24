import sharp from 'sharp';

const src = '/home/z/my-project/upload/logo.jpg';
const { data, info } = await sharp(src)
  .resize({ width: 100, height: 100, fit: 'cover', position: 'center' })
  .raw()
  .toBuffer({ resolveWithObject: true });

const counts = new Map();
const step = 24; // bucket size
for (let i = 0; i < data.length; i += 3) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  // skip near-white
  if (r > 240 && g > 240 && b > 240) continue;
  const key = `${Math.floor(r/step)*step},${Math.floor(g/step)*step},${Math.floor(b/step)*step}`;
  counts.set(key, (counts.get(key) || 0) + 1);
}
const sorted = [...counts.entries()].sort((a,b) => b[1]-a[1]).slice(0, 8);
console.log('Top colors (r,g,b → count):');
for (const [k, c] of sorted) {
  const [r,g,b] = k.split(',').map(Number);
  const hex = '#' + [r,g,b].map(n => n.toString(16).padStart(2,'0')).join('').toUpperCase();
  console.log(`  ${hex}  (rgb ${k})  count=${c}`);
}
