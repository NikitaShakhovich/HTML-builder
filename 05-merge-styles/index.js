const path = require('path');
const fs = require('fs');
const cssPath = path.join(__dirname, 'styles');
const bundlePath = path.join(__dirname, 'project-dist');
const writeStream = fs.createWriteStream(path.join(bundlePath, 'bundle.css'));

fs.readdir(cssPath, { withFileTypes: true }, (error, files) => {
  if (error) console.log(error.message);
  else {
    files.forEach((file) => {
      if (
        file.isFile() &&
                path.extname(path.join(cssPath, file.name)) === '.css'
      ) {
        const stream = fs.createReadStream(path.join(cssPath, file.name), {
          encoding: 'UTF-8',
        });
        stream.pipe(writeStream);
      }
    });
  }
});
