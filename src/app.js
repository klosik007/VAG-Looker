import { CollectLabel } from './components/CollectLabel';
import { CreateTable } from './components/CreateTable';
import { CreateTableParams } from './components/CreateTableParams';
import { CreateTableBS } from './components/CreateTableBS';
import { CreateTableAD } from './components/CreateTableAD';
import { CreateTableCO } from './components/CreateTableCO';
import { CreateTableLC } from './components/CreateTableLC';
import { CreateTableSA } from './components/CreateTableSA';
import { CreateTableSelAC } from './components/CreateTableSelAC';
//import { ParseFile } from './components/ParseFile';


var button = document.getElementById("button").onclick = function(){
    //var VAGNum = document.getElementById("VAGNum").value;
    //console.log(VAGNum);
    //if (!VAGNum) console.log("Insert text!");

    var labelObject = CollectLabel(VAGNum);

    
    CreateTable.createLabelCaption(VAGNum);

    var paramsTable = new CreateTableParams(labelObject, 'Param', VAGNum);
    if (paramsTable.functionsExists("Param")){
        paramsTable.createTableParams([labelObject.ParamGroupNames[0], labelObject.ParamGroupNames[1], labelObject.ParamGroupNames[2]],
            [labelObject.ParamNames[0], labelObject.ParamNames[1], labelObject.ParamNames[2]]);
    }

    var selAC = new CreateTableSelAC(labelObject, "SelAC", VAGNum);
    if (selAC.functionsExists("SelAC")){
        selAC.createTableSelAC([], [labelObject.SelACNames[0]]);
    }

    var basicSettingsTable = new CreateTableBS(labelObject, "BS", VAGNum);
    if (basicSettingsTable.functionsExists("BS")){
        basicSettingsTable.createTableBS([labelObject.BSGroupNames[0], labelObject.BSGroupNames[1], labelObject.BSGroupNames[2]],
            [labelObject.BSSettingsNames[0], labelObject.BSSettingsNames[1], labelObject.BSSettingsNames[2]]);
    }
    
    var adaptationsTable = new CreateTableAD(labelObject, "AD", VAGNum);
    if(adaptationsTable.functionsExists("AD")){
        adaptationsTable.CreateTableAD([labelObject.AdaptGroupNames[0], labelObject.AdaptGroupNames[1], labelObject.AdaptGroupNames[2]],
                           [labelObject.AdaptNames[0], labelObject.AdaptNames[1], labelObject.AdaptNames[2]]);
    }
    
    var CO_Table = new CreateTableCO(labelObject, "CO", VAGNum);
    if (CO_Table.functionsExists("CO")){
        CO_Table.createTableCO([], [labelObject.CONames[0]]);
    }

    var LC_Table = new CreateTableLC(labelObject, "LC", VAGNum);
    if (LC_Table.functionsExists("LC")){
        LC_Table.createTableLC([], [labelObject.LCNames[0]]);
    }

    var SA_Table = new CreateTableSA(labelObject, "SA", VAGNum);
    if (SA_Table.functionsExists("SA")){
        SA_Table.createTableSA([], [labelObject.SANames[0]]);
    }
};

