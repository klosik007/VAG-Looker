import { LoadFile } from './LoadFile';
import { settings } from '../settings'; 
import { ParseFile } from './ParseFile';

export const CollectLabel = () =>{
        var parser;
        var VAGNum = document.getElementById("VAGNum").value;
        if (!VAGNum) console.log("Insert text!");
    
        var firstTwoLettersVAG = VAGNum.substring(0,2);
        console.log(firstTwoLettersVAG);
    
        var driverList = document.getElementById("driverType");
        var selectedDriver = driverList.options[driverList.selectedIndex].value;
    
        var publicGeneralPath = `${settings.source}/${firstTwoLettersVAG}-${selectedDriver}.lbl`;
    
        var file = LoadFile(publicGeneralPath);// krok 1a
    
        if (!file){
            var VAGNumFileName = VAGNum.substring(0, 11);
            console.log(VAGNumFileName);
            var VAGNumFileNameSource = `${settings.source}/${VAGNumFileName}.lbl`;//krok 2
            file = LoadFile(VAGNumFileNameSource);//krok 2a
            if (!file){
                throw "No such VAG num!";
            }
            console.log(file);
            parser = ParseFile(file);
            console.log(parser);
        }
    
        console.log(selectedDriver);
        console.log(VAGNum);
    
        console.log(file);
        //console.log(VAGNum, driverType);
    
        //var VAGNum = "441-907-557-D";
        var matches2 = file.match(new RegExp(VAGNum, "is"));//krok 1a
        if (!matches2){
            throw "No such VAG num in label file!";
        }
    
        console.log(matches2[0]);
    
    
        var regExp1 = /(.{3}-.{3}-.{3})(.{0,5})\.(lbl|clb|LBL|CLB)/gi;//first part of redirect - name of label file in redirect file xx-yy
        var matches1 = file.match(regExp1);
        var matches0Len = matches1[0].length;
        var match2 = matches1[0].substring(0, matches0Len - 3) + matches1[0].substring(matches0Len - 3).toLowerCase();
        console.log(match2);
    
        if (match2 && matches2){//krok 1b
            file = LoadFile(`${settings.source}/${match2}`);
            if (!file){
                throw "File not found!";
            }
            console.log(file);
            //parsing the label file - TBC
            parser = ParseFile(file);
            console.log(parser);
    
            // var string2 = "001,0,General";
            // var parsed = string2.match(new RegExp(/^(\d{3}|\d{1})\,[0]\,.*/, "gm"));
            // console.log(parsed);
        }
    
    };
 