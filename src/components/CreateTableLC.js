import { CreateTable } from './CreateTable';

export class CreateTableLC extends CreateTable{
    constructor(object, type, label){
        super(object, type, label);
    }
    
    createTableLC(array){
        var div = document.createElement("div");
    
        var res = document.body.appendChild(div).setAttribute("id", this.type);

        var table = document.createElement("table");
        var putTable = document.getElementById(this.type);
        putTable.setAttribute("id", "resultTableLC");

        table.style.border = "2px solid #456789";
        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;

            var row = table.insertRow();
            var tableLen = array[0].length;
            var tableHigh = array.length;
            console.log(tableLen, tableHigh);
            for(var i = 0; i < tableLen; i++){
                var tr = table.insertRow();
                for (var j = 0; j < tableHigh; j++){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode(array[j][i]));
                    td.style.border = "1px solid #456";    
                }
            }

            putTable.insertAdjacentElement("beforeend", table);
        }
    }