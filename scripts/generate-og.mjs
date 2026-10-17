import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="78%" cy="18%" r="70%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.16"/>
      <stop offset="55%" stop-color="#ffffff" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="#050505"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <text x="80" y="210" fill="#a3a3a3" font-family="DejaVu Sans, sans-serif"
        font-size="22" font-weight="700" letter-spacing="8">PORTFOLIO</text>

  <text x="80" y="330" fill="#ffffff" font-family="DejaVu Sans, sans-serif"
        font-size="86" font-weight="700" letter-spacing="1">Jhon Tajumbina</text>

  <rect x="80" y="372" width="240" height="4" rx="2" fill="url(#rule)"/>

  <text x="80" y="446" fill="#d4d4d4" font-family="DejaVu Sans, sans-serif"
        font-size="34" font-weight="400">Software Engineer &amp; Digital Trafficker Ads</text>

  <text x="80" y="500" fill="#8a8a8a" font-family="DejaVu Sans, sans-serif"
        font-size="26" font-weight="400">React · Node · Laravel · Flutter · Meta Ads</text>

  <text x="1120" y="560" fill="#8a8a8a" text-anchor="end"
        font-family="DejaVu Sans, sans-serif" font-size="24">jhon-tajumbina.vercel.app</text>
</svg>
`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(resolve(root, 'public/og-image.png'));

console.log('Generated public/og-image.png (1200x630)');
