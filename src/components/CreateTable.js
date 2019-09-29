
    import {ParseFile} from './ParseFile';

    var params = false;
    var basicSettings = false;
    var adaptations = false;
    var AC = false;
    var CO = false;
    var LC = false;
    var SA = false;

    var label2 = ParseFile(file);

class CreateTable {
    constructor(file, type, label){
        this.file = file;
        this.type = type;
        this.label = label;
    }

    createTable(){
        var div = document.createElement("div");

        var result = document.body.appendChild(div).setAttribute("id", type);

        var title = document.createElement("h1");
        var putTitle = document.getElementById("result").insertAdjacentElement("afterbegin", title);
        putTitle.setAttribute("id", "title");
        document.getElementById("title").innerText = `Label ${label}`;

        var table = document.createElement("table");
        var putTable = document.getElementById("result");
        putTable.setAttribute("id", "resultTable");

        table.style.border = "2px solid #456789";
        table.createCaption().innerHTML = `<b>Results: ${type}</b>`;


        switch (type){
            case 'Adaptations', 'Parameters', 'Basic Settings':{
                var labelsHead = [`${type} channel`, `${type} value`, `${type} note`];
                var row = table.insertRow();

                for (var i = 0; i < 3; i++) {
                    var headerCell = document.createElement("th");
                    headerCell.innerHTML = labelsHead[i];
                    row.appendChild(headerCell);
                }

                for(var i = 0; i < 3; i++){
                    var tr = table.insertRow();
                    // th1.appendChild(document.createTextNode('Adaptation value'));
                    // th1.style.border = "1px solid #456";
                    for (var j = 0; j < 3; j++){
                        var td = tr.insertCell();
                        td.appendChild(document.createTextNode(labels[j]));
                        td.style.border = "1px solid #456";    
                    }
                }

                putTable.insertAdjacentElement("beforeend", table);
            }

            case 'Codings', 'Security Access':{

            }

            default: throw 'Invalid parameter!';
        };
        

    }
}
 