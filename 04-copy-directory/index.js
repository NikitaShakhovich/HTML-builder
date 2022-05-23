const fs = require('fs/promises');
const path = require('path');

const originPath = path.join(__dirname, 'files');
const copyPath = path.join(__dirname, 'files-copy');

async function allCopy(origin, copy) {
  try {
    const files = await fs.readdir(origin, {
      withFileTypes: true
    });
    await fs.rm(copy, { recursive: true, force: true });
    await fs.mkdir(copy, { recursive: true });
    for (const file of files) {
      const oldPath = path.join(origin, file.name);
      const newPath = path.join(copy, file.name);
      if(file.isFile()) {
        await fs.copyFile(oldPath, newPath);
      } else {
        await allCopy(oldPath, newPath);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

allCopy(originPath, copyPath);
