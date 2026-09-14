import { writeFileSync, mkdirSync } from 'fs';
import { basename } from 'path';

const BASE = 'https://starsworld.my.canva.site/giangriveri-portfolio/_assets';
const OUT = 'public/sites/starsworld-my-canva-site-c8242e89/giangriveri-portfolio-686cb420';

const assets = [
  // Images (media)
  `${BASE}/media/6c24ae6fc72cf5d7de7aecf4ed65ea1e.png`,
  `${BASE}/media/6425b363f6cb75c818126dae0a4a4477.png`,
  `${BASE}/media/97127f0db54183c0879dfd849c04a407.jpg`,
  `${BASE}/media/82dcedcb1eaa2cf514567f3d8a2a1bd4.jpg`,
  `${BASE}/media/fd0697800d55617d63cfff99189564e4.jpg`,
  `${BASE}/media/b501c9231f1b630fa055e4f0f1fd9bc4.jpg`,
  `${BASE}/media/89e180abb41d33ee0d64f898f5e1c52b.png`,
  `${BASE}/media/875630dfd8cee5a8052f3e974bcc7f12.png`,
  // Video poster
  `${BASE}/video/ec8f53e05757922416796cc73f347a3c.jpg`,
  // Video
  `${BASE}/video/8ded250fc74d0748c68f4bf427fc510b.mp4`,
];

mkdirSync(`${OUT}/images`, { recursive: true });
mkdirSync(`${OUT}/videos`, { recursive: true });

async function download(url, outPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) { console.error(`FAILED ${url}: ${res.status}`); return; }
    const buf = await res.arrayBuffer();
    writeFileSync(outPath, Buffer.from(buf));
    console.log(`OK  ${outPath}`);
  } catch (e) {
    console.error(`ERR ${url}: ${e.message}`);
  }
}

// Batch 4 at a time
async function main() {
  const tasks = assets.map(url => {
    const name = basename(url);
    const isVideo = url.includes('/video/') && url.endsWith('.mp4');
    const outPath = isVideo ? `${OUT}/videos/${name}` : `${OUT}/images/${name}`;
    return () => download(url, outPath);
  });

  for (let i = 0; i < tasks.length; i += 4) {
    await Promise.all(tasks.slice(i, i + 4).map(t => t()));
  }
  console.log('Done.');
}

main();
