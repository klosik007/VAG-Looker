import { LoadFile } from '../components/LoadFile';
import { settings } from '../settings'; 
//import { CollectLabelByVAGNum } from './CollectLabelByVAGNum';

export const CollectLabelByxxyySchema = () =>{
    var VAGNum = document.getElementById("VAGNum").value;
    if (!VAGNum) console.log("Insert text!");

    var firstTwoLettersVAG = VAGNum.substring(0,2);
    console.log(firstTwoLettersVAG);

    var driverList = document.getElementById("driverType");
    var selectedDriver = driverList.options[driverList.selectedIndex].value;

    console.log(selectedDriver);
    console.log(VAGNum);

    var publicGeneralPath = `${settings.source}/${firstTwoLettersVAG}-${selectedDriver}.lbl`;
    var file = LoadFile(publicGeneralPath);
    
    if (!file){
        var VAGNumFileName = VAGNum.substring(0, 11);
        console.log(VAGNumFileName);
        var VAGNumFileNameSource = `${settings.source}/${VAGNumFileName}.lbl`;
        var anotherFile = LoadFile(VAGNumFileNameSource);
        if (!anotherFile){
            return -1;
        }
        console.log(anotherFile);
    }

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
    var matches0Len = matches1[0].length;
    var match2 = matches1[0].substring(0, matches0Len - 3) + matches1[0].substring(matches0Len - 3).toLowerCase();
    console.log(match2);

    if (match2 && matches2){
        var label = LoadFile(`${settings.source}/${match2}`);
        if (!label){
            throw "File not found!";
        }
        console.log(label);
        //parsing the label file - TBC
    }
};
 