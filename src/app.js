import CreateTablesOnButtonClick from './components/CreateTablesOnButtonClick';
import { createTableByDrop, dragOverHandler } from './components/DropHandlers';

var button = document.getElementById("button").onclick = function(){
    CreateTablesOnButtonClick();
};

var dragDivCreate = document.createElement("div");
var dragDivAppend = document.body.appendChild(dragDivCreate).setAttribute("id", "drop_zone");

document.getElementById("drop_zone").innerText = "Drag file here to transform it";
document.getElementById("drop_zone").ondragover = dragOverHandler;
document.getElementById("drop_zone").ondrop = createTableByDrop;