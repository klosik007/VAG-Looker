class CreateTable {
    constructor(label, type, width, height,  ){

    }

    createTable(){
        var div = document.createElement("div");

        var result = document.body.appendChild(div).setAttribute("id", "result");

        var title = document.createElement("h1");
        var putTitle = document.getElementById("result").insertAdjacentElement("afterbegin", title);
        putTitle.setAttribute("id", "title");
        document.getElementById("title").innerText = "Label xxx-yyy-zzz";

        var table = document.createElement("table");
        var putTable = document.getElementById("result");
        putTable.setAttribute("id", "resultTable");

        table.style.border = "2px solid #456789";
        table.createCaption("blah blah").innerHTML = "<b>Results: Adaptations</b>";

        var labels = ['Adaptation channel', 'Adaptation value', 'Adaptation note'];

        var row = table.insertRow();
        for (var i = 0; i < 3; i++) {
            var headerCell = document.createElement("th");
            headerCell.innerHTML = labels[i];
            row.appendChild(headerCell);
        }

        for(var i=0; i< 3; i++){
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
}

var 