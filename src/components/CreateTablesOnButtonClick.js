import ShowTables from './ShowTables';

export default () =>{
    var VAGNum = document.getElementById("VAGNum").value;
    console.log(VAGNum);

    if (!VAGNum) console.log("Insert text!");

    var labelObject = CollectLabel(VAGNum);
    console.log(labelObject);
    ShowTables(VAGNum, labelObject);
}
