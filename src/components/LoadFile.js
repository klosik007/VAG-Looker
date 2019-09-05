const fs = require('fs');

function LoadFile(source){
    return fs.readFileSync(source).toString();
}

module.exports.LoadFile = LoadFile;