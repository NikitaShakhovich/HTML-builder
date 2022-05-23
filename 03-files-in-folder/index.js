const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;
const pathDirectory = path.join(__dirname, 'secret-folder');

const getData = async () => {
  fs.readdir(pathDirectory, {withFileTypes: true}, (err, items) => {
    if (err) throw err;
    items.map(async item => {
      if (item.isFile()) {
        const nameFile = path.parse(path.join(__dirname, 'secret-folder', `${item.name}`)).name;
        const typeFile = path.parse(path.join(__dirname, 'secret-folder', `${item.name}`)).ext;
        const sizeFile = await fsPromises.stat(path.join(__dirname, 'secret-folder', `${item.name}`));
        console.log(`Имя файла: ${nameFile} Расширение файла: ${typeFile} размер файла: ${sizeFile.size} байт`);
      }
    });
  });
};
getData();

