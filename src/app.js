import { LoadFile } from './components/LoadFile';
import { settings } from './settings'; 


//console.log(VAGNum);

var button = document.getElementById("button").onclick = function(){
    var VAGNum = document.getElementById("VAGNum").value;
    if (!VAGNum) console.log("Insert text!");

    var firstTwoLettersVAG = VAGNum.substring(0,1);

    var driverList = document.getElementById("driverType");
    var selectedDriver = driverList.options[driverList.selectedIndex].value;

    var publicGeneralPath = `${settings.source}/Labels/${firstTwoLettersVAG}-${selectedDriver}`;
    var file = LoadFile(publicGeneralPath);
    if (!file){
        throw "No general file!";
    }

    console.log(selectedDriver);
    console.log(VAGNum);

    console.log(file);
    //console.log(VAGNum, driverType);

    //var VAGNum = "441-907-557-D";
    var matches2 = file.match(new RegExp(VAGNum, "is"));
    if (!matches2){
        throw "No such VAG num in label file!";
    }

    console.log(matches2[0]);


    var regExp1 = /(.{3}-.{3}-.{3})(.{0,5})\.(lbl|clb|LBL|CLB)/gi;//first part of redirect - name of label file in redirect file xx-yy
    var matches1 = file.match(regExp1);
    console.log(matches1[0]);

    if (matches1 && matches2){
        var label = LoadFile(`${settings.source}/Labels/${matches1}`);
        if (!label){
            throw "File not found!";
        }
        //parsing the label file - TBC
    }
};




// var directFileNameToLoad = settings.source + `/${match[0]}`;
// var fileToLoad = LoadFile(directFileNameToLoad);

//console.log(fileToLoad);


