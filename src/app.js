const LoadFile = require('./components/LoadFile');
const path = require('path');
//const src = require('settings');



var publicPath = path.join(__dirname, '../labels/44-01.lbl');
var file = LoadFile.LoadFile(publicPath);

console.log(file);

var regExp1 = /(.{3}-.{3}-.{3})(.{0,5})\.(lbl|clb|LBL|CLB)/g;//first part of redirect - name of label file in redirect file xx-yy
var match = regExp1.exec(file);

var regExp2 = /(.{3}-.{3}-.{3})/g; //second part of REDIRECT - VAG number in redirect file xx-yy
                                    //or another approach - regex will be given as VAG number in browser and matched or not in file

console.log(match[0]);
// console.log(match2);
//var regExp4 = 

var directFileNameToLoad = path.join(__dirname, `../labels/${match[0]}`);
var fileToLoad = LoadFile.LoadFile(directFileNameToLoad);

console.log(fileToLoad);
