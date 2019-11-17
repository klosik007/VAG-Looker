import { CreateTable } from './CreateTable';
import { CreateTableParams } from './CreateTableParams';
import { CreateTableBS } from './CreateTableBS';
import { CreateTableAD } from './CreateTableAD';
import { CreateTableCO } from './CreateTableCO';
import { CreateTableLC } from './CreateTableLC';
import { CreateTableSA } from './CreateTableSA';
import { CreateTableSelAC } from './CreateTableSelAC';
import { DecToHex } from './DecToHex';

export default (VAGNum, labelObject) =>{
    CreateTable.createLabelCaption(VAGNum);

    var paramsTable = new CreateTableParams(labelObject, 'Param', VAGNum);
    if (paramsTable.functionsExists("Param")){
        paramsTable.createTableParams([labelObject.ParamNames[0], labelObject.ParamNames[1], labelObject.ParamNames[2]]);
    }

    var selAC = new CreateTableSelAC(labelObject, "SelAC", VAGNum);
    if (selAC.functionsExists("SelAC")){
        selAC.createTableSelAC([labelObject.SelACNames[0], DecToHex(labelObject.SelACNames[0]), labelObject.SelACNames[2]]);
    }

    var basicSettingsTable = new CreateTableBS(labelObject, "BS", VAGNum);
    if (basicSettingsTable.functionsExists("BS")){
        basicSettingsTable.createTableBS([labelObject.BSSettingsNames[0], labelObject.BSSettingsNames[1], labelObject.BSSettingsNames[2]]);
    }
    
    var adaptationsTable = new CreateTableAD(labelObject, "AD", VAGNum);
    if(adaptationsTable.functionsExists("AD")){
        adaptationsTable.createTableAD([labelObject.AdaptNames[0], labelObject.AdaptNames[1], labelObject.AdaptNames[2]]);
    }
    
    var CO_Table = new CreateTableCO(labelObject, "CO", VAGNum);
    if (CO_Table.functionsExists("CO")){
        CO_Table.createTableCO([labelObject.CONames[0]]);
    }

    var LC_Table = new CreateTableLC(labelObject, "LC", VAGNum);
    if (LC_Table.functionsExists("LC")){
        LC_Table.createTableLC([labelObject.LCNames[0], labelObject.LCNames[1], labelObject.LCNames[2]]);
    }

    var SA_Table = new CreateTableSA(labelObject, "SA", VAGNum);
    if (SA_Table.functionsExists("SA")){
        SA_Table.createTableSA([labelObject.SANames[0]]);
    }
}
