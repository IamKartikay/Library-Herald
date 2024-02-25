const fs = require("fs");
const path = require('path');

const a = path.join(__dirname, '/Copyright Assignment Form.pdf');
const pdfFileStream = fs.createReadStream(a);

pdfFileStream.on('data', function (chunk) { 
    console.log(chunk.toString()); 
});