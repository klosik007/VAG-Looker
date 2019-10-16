import { CreateTable } from './CreateTable';

export class CreateTableSA extends CreateTable{
    constructor(object, type, label){
        super(object, type, label);
    }
    
    createTableSA(labelsHead, array){
        var div = document.createElement("div");
    
        var res = document.body.appendChild(div).setAttribute("id", this.type);

        var table = document.createElement("table");
        var putTable = document.getElementById(this.type);
        putTable.setAttribute("id", "resultTableSA");

        table.style.border = "2px solid #456789";
        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;

        //ar printTable = (labelsHead, array) => {
            var row = table.insertRow();

            for (var i = 0; i < labelsHead.length; i++) {
                var headerCell = document.createElement("th");
                headerCell.innerHTML = labelsHead[i];
                row.appendChild(headerCell);
            }

            var tableLen = array[0].length;
            var tableHigh = array.length;
            console.log(tableLen, tableHigh);
            for(var i = 0; i < tableLen; i++){
                var tr = table.insertRow();
                // var td2 = tr.insertCell();
                //     td2.appendChild(document.createTextNode(object[i][j]));
                //     td2.style.border = "1px solid #456";    
                // th1.appendChild(document.createTextNode('Adaptation value'));
                // th1.style.border = "1px solid #456";
                for (var j = 0; j < tableHigh; j++){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode(array[j][i]));
                    td.style.border = "1px solid #456";    
                }
            }

            putTable.insertAdjacentElement("beforeend", table);
        }
    }
//}