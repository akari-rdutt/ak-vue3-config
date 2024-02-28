// build.js
import { build } from 'vite';
import fs from 'fs';
import path from 'path';

async function compileAndMove() {
  const { output } = await build();
  const distDir = 'dist'; // Change this to your desired output directory

  for (const { fileName, code } of output) {
    const componentPath = path.join(distDir, fileName);
    fs.writeFileSync(componentPath, code);
    console.log(`Compiled ${fileName} and moved to ${distDir}`);
  }
}

compileAndMove();
