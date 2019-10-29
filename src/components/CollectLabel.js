import { LoadFile } from './LoadFile';
import { settings } from '../settings'; 
import { ParseFile } from './ParseFile';
import { GetMatches }  from './GetMatches';

const XXhyphenXXLabel = (VAGNum) =>{
    var firstTwoLettersVAG = VAGNum.toString().substring(0,2);
    console.log(firstTwoLettersVAG);
    
    var driverList = document.getElementById("driverType");
    var selectedDriver = driverList.options[driverList.selectedIndex].value;
    
    var publicGeneralPath = `${settings.source}/${firstTwoLettersVAG}-${selectedDriver}.lbl`;
    
    var file = LoadFile(publicGeneralPath);// krok 1a
    console.log(selectedDriver);
    console.log(VAGNum);

    console.log(file);
    //console.log(VAGNum, driverType);

    //var VAGNum = "441-907-557-D";
    
    //krok 1a
    //var matches1 = file.match(new RegExp(VAGNum, "is"));
    //var matches2 = file.match(new RegExp(VAGNum.substring(0,7) + 
  //  `(\-[\?]{3}\-[\?]{3}|\-[\?]{2}.{1}\-[\?]{2}.{1}|\-[\?]{1}.{2}\-[\?]{1}.{2}|\-[\?]{1}.{1}[\?]\-[\?]{1}.{1}[\?]{1}|\-[\?]{1}.{2}\-[\?]{1}.{2}|\-[\?]{3}|\-.{1}[\?]{2}\-[\?]{3})`));

    //console.log(matches2[0]);
    //
    var regExp1 = new RegExp("^REDIRECT\,(.{3}\-.{3}\-.{3}.{0,5}\.(lbl|clb|LBL|CLB))\,"+"("+VAGNum.toString()+")", "gm");//first part of redirect - name of label file in redirect file xx-yy
    var regExp2 = new RegExp(`^REDIRECT\,(.{3}\-.{3}\-.{3})(.{0,5})\.(lbl|clb|LBL|CLB)\,(${VAGNum.toString().substring(0,7)} 
    (\-[\?]{3}\-[\?]{3}|\-[\?]{2}.{1}\-[\?]{2}.{1}|\-[\?]{1}.{2}\-[\?]{1}.{2}|\-[\?]{1}.{1}[\?]\-[\?]{1}.{1}[\?]{1}|\-[\?]{1}.{2}\-[\?]{1}.{2}|\-[\?]{3}|\-.{1}[\?]{2}\-[\?]{3}|\-.{3}\-[\?]{3}))`, "gm");
    console.log(regExp1);
    var matchesWholeVAGNum = [GetMatches(file, regExp1, 1), GetMatches(file, regExp1, 3)];
    var matchesUniversalVAGNum = [GetMatches(file, regExp2, 1), GetMatches(file, regExp2, 4)];
    console.log(matchesWholeVAGNum);
    console.log(matchesUniversalVAGNum);
    var matchesWholeVAGNumLen = (matchesWholeVAGNum[0]).length;
    var matchesUniversalVAGNumLen = (matchesUniversalVAGNum[0]).length;

    var fileName = '';
    if (matchesUniversalVAGNumLen > 0){
        for(var i=0;i<matchesUniversalVAGNumLen; i++){
            if(matchesUniversalVAGNum[1][i] == VAGNum){
                fileName = matchesUniversalVAGNum[0][i];
            }
        }
    }else if (matchesWholeVAGNumLen > 0){
        for(var i=0;i<matchesWholeVAGNumLen; i++){
            if(matchesWholeVAGNum[1][i] == VAGNum){
                fileName = matchesWholeVAGNum[0][i];
            }
        }
    }
    
    var fileNameLen = fileName.length;
    var fileNameImproved = fileName.substring(0, fileNameLen - 3) + fileName.substring(fileNameLen - 3).toLowerCase();
    console.log(fileNameImproved);

    if (fileNameImproved){//krok 1b
        file = LoadFile(`${settings.source}/${fileNameImproved}`);
        if (!file){
            throw "File not found!";
        }
        console.log(file);
        return ParseFile(file);
        //parsing the label file - TBC
    } else return false;
}

const VAGNumFileNameLabel = (VAGNum) =>{
        var file = '';

        var VAGNumFileName = VAGNum.substring(0, 11);
        console.log(VAGNumFileName);
        var VAGNumFileNameSource = `${settings.source}/${VAGNumFileName}.lbl`;//krok 2
        file = LoadFile(VAGNumFileNameSource);//krok 2a
        if (!file){
            throw "No such VAG num!";
        }
        console.log(file);
        return ParseFile(file);
        //console.log(parser);
}

export const CollectLabel = (VAGNum) =>{
    var VAGNum = document.getElementById("VAGNum").value;
    if (!VAGNum) console.log("Insert text!");
    
    if (XXhyphenXXLabel(VAGNum)) return XXhyphenXXLabel(VAGNum)
    else return VAGNumFileNameLabel(VAGNum);
        // if (!XXhyphenXXLabel(VAGNum)){
        //     return VAGNumFileNameLabel(VAGNum);
        // }
};
