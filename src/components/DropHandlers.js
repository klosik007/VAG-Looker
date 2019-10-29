import ShowTables from './ShowTables';
import { ParseFile } from './ParseFile';

export function createTableByDrop(ev) {
  console.log('File(s) dropped');
  ev.preventDefault();//prevent file being opened

  var file = ev.dataTransfer.files[0];
  console.log(file);
  var reader = new FileReader();
  reader.onload = function(evt) {
      console.log(evt.target);
      var text = evt.target.result;
      document.getElementById("drop_zone").innerText = text;
      var labelObject = ParseFile(text);
      ShowTables(file.name, labelObject);
  };

  reader.readAsText(file);
}

export function dragOverHandler(ev) {
    console.log('File(s) in drop zone'); 
    ev.preventDefault();
}