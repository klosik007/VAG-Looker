const fs = require('fs');
const path = require('path');
//const src = require('settings');

function LoadFile(source){
    return fs.readFileSync(source).toString();
}

var publicPath = path.join(__dirname, '../labels/4H-01.lbl');
var file = LoadFile(publicPath);

console.log(file);

var regExp1 = /REDIRECT,(.{3}-.{3}-.{3})(.{0,4})\.(lbl|clb|LBL|CLB)/;//first part of redirect - name of label file in redirect file xx-yy
var regExp2 = /,(.{3}-.{3}-.{3})/; //second part of REDIRECT - VAG number in redirect file xx-yy
var regExp3 = /({3}-{3}-{3})/; //only VAG number in file's name
//var regExp4 = 
