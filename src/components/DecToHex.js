export function DecToHex(arrayAC){
  
  var arrayACLen = arrayAC.length;
  var hexArray = [];

  for (var i =0; i < arrayACLen; i++){
    var hex = "0000";
    if      (parseInt(arrayAC[i]) >= 0    && parseInt(arrayAC[i]) <= 15)    { hex = "000" + parseInt(arrayAC[i]).toString(16).toUpperCase(); hexArray.push(hex);  }
    else if (parseInt(arrayAC[i]) >= 16   && parseInt(arrayAC[i]) <= 255)   { hex = "00"  + parseInt(arrayAC[i]).toString(16).toUpperCase(); hexArray.push(hex); }
    else if (parseInt(arrayAC[i]) >= 256  && parseInt(arrayAC[i]) <= 4095)  { hex = "0"   + parseInt(arrayAC[i]).toString(16).toUpperCase(); hexArray.push(hex); }
    else if (parseInt(arrayAC[i]) >= 4096 && parseInt(arrayAC[i]) <= 65535) { hex =         parseInt(arrayAC[i]).toString(16).toUpperCase(); hexArray.push(hex); }
  }
 
  return hexArray;
}