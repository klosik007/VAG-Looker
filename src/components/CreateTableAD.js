import { CreateTable } from './CreateTable';

export class CreateTableAD extends CreateTable{
    constructor(object, type, label){
        super(object, type, label);
    }
    
    createTableAD(array){
        var div = document.createElement("div");
    
        var res = document.body.appendChild(div).setAttribute("id", this.type);

        var table = document.createElement("table");
        var putTable = document.getElementById(this.type);
        putTable.setAttribute("id", "resultTableAD");

        table.style.border = "2px solid #456789";
        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;

            var tableLen = array[0].length;
            var tableHigh = array.length;
            console.log(tableLen, tableHigh);
            for(var i = 0; i < tableLen; i++){
                var tr = table.insertRow();
                for (var j = 0; j < tableHigh; j++){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode(array[j][i]));
                    td.style.border = "1px solid #456";
                    // td.style.display = "inline";
                    td.style.width = "225px";
                    td.style.textAlign = "center";   
                }
            }

            putTable.insertAdjacentElement("beforeend", table);

            var cells = document.getElementById("resultTableAD").getElementsByTagName("td");
            for (var i = 0; i < cells.length; i++) {
                if (cells[i].innerHTML == "0") {
                    cells[i].style.backgroundColor = "#FF55";
                    cells[i-1].style.backgroundColor = "#FF55";
                    cells[i+1].style.backgroundColor = "#FF55";
                }
            }
        }
    }