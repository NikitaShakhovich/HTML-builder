const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, './text.txt');
const stream = fs.createReadStream(filePath);
// console.log(stream);
stream.on('data', chunk => {
    // console.log(Buffer.from(chunk).toString());
    console.log(chunk.toString());
});
