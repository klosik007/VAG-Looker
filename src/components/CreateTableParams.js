import { CreateTable } from './CreateTable';
import { create } from 'domain';

export class CreateTableParams extends CreateTable{
    constructor(object, type, label){
        super(object, type, label);
    }

    createTableParams(array){
        var div = document.createElement("div");
    
        var res = document.body.appendChild(div).setAttribute("id", this.type);

        var table = document.createElement("table");
        var putTable = document.getElementById(this.type);
        putTable.setAttribute("id", "resultTableParams");

        table.style.border = "2px solid #456789";
        table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;

            var tableLen = array[0].length;
            var tableWidth = array.length;
          
            //console.log(tableLen, tableWidth);
            for(var i = 0; i < tableLen; i++){
                var tr = table.insertRow();
                tr.setAttribute("id", `param${i}`);
                //tr.style.width = "700px";
                for (var j = 0; j < tableWidth; j++){
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode(array[j][i]));
                    td.style.border = "1px solid #456";
                    // td.style.display = "inline";
                    td.style.width = "225px";
                    td.style.textAlign = "center";
                }
            }

            putTable.insertAdjacentElement("beforeend", table);

        //create buttons and set attributes
        for (var i=0; i < tableLen ; i++){
            var button = document.createElement("button");
            button.setAttribute("id", `hideParam${i}`);
            button.innerText = "+/-";
            button.style.position = "absolute";
            button.style.left = `790px`;
            var heightFromTop = document.getElementById(`param${i}`).getBoundingClientRect().height;
            var offsetTop = document.getElementById(`param${i}`).offsetTop;
            button.style.top = `${offsetTop + heightFromTop/2 +335}px`;
            div.appendChild(button);
        }

        
        var clicked = false;
        var buttons = document.getElementsByTagName("button");

        //set onclick event
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function(e){
                if (!clicked){
                    clicked = true;
                    document.getElementById(`param${i}`).style.display = 'none';
                }else {
                    clicked = false;
                    document.getElementById(`param${i}`).style.display = '';
                }
            };
        }
        
        //set color on group names
            var cells = document.getElementById("resultTableParams").getElementsByTagName("td");
            for (var i = 0; i < cells.length; i++) {
                if (cells[i].innerHTML == "0" || cells[i].innerHTML == "000" ) {
                    cells[i].style.backgroundColor = "#FF55";
                    cells[i-1].style.backgroundColor = "#FF55";
                    cells[i+1].style.backgroundColor = "#FF55";
                }
            }
        }
    }
