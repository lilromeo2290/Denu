import sharp from 'sharp';

const src = '/home/z/my-project/upload/logo.jpg';

// Extract just the sun + palm tree icon from the center of the logo.
// Original is 931x755. Based on the description the icon is roughly center.
// Try a few crops and pick the best.

// Crop 1: center-left square (icon area)
await sharp(src)
  .extract({ left: 280, top: 100, width: 380, height: 380 })
  .resize({ width: 256, height: 256 })
  .png()
  .toFile('/home/z/my-project/public/logo-icon.png');

// Also make a transparent version of the icon
const { data, info } = await sharp('/home/z/my-project/public/logo-icon.png')
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.alloc(width * height * 4);
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const isGreen = g > r + 5 && g > b + 5 && g < 110 && r < 90;
  if (isGreen) {
    out[j] = 0; out[j + 1] = 0; out[j + 2] = 0; out[j + 3] = 0;
  } else {
    out[j] = r; out[j + 1] = g; out[j + 2] = b; out[j + 3] = 255;
  }
}
await sharp(out, { raw: { width, height, channels: 4 } })
  .png()
  .toFile('/home/z/my-project/public/logo-icon-transparent.png');

console.log('✓ Icon crops generated');
