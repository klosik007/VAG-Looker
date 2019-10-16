export class CreateTable {
    constructor(object, type, label){
        this.object = object; //parsed file in variable (given as object with arrays)
        this.type = type; //look at switch case statement
        this.label = label; //VAG number here 
    }

    static createLabelCaption(label){
        var div = document.createElement("div");
    
        var result = document.body.appendChild(div).setAttribute("id", "label");
    
        var title = document.createElement("h1");
        var putTitle = document.getElementById("label").insertAdjacentElement("afterbegin", title);
        putTitle.setAttribute("id", "title");
        document.getElementById("title").innerText = `Label ${label}`;
    }
    
    functionsExists(type){
        switch (type){
            case 'Param':{      
                if((this.object.ParamNames[0]).length == 0 || 
                (this.object.ParamNames[1]).length == 0 || 
                (this.object.ParamNames[2]).length == 0){
                    return false;
                }else return true;
            }
            case 'CO':{
                if((this.object.CONames[0]).length == 0) return false
                else return true;
            }
            case 'BS':{
                if((this.object.BSGroupNames[0]).length == 0 ||  
                    (this.object.BSGroupNames[1]).length == 0 || 
                    (this.object.BSGroupNames[2]).length == 0){
                        return false
                    }else return true;
            }
            case 'AD':{
                if((this.object.AdaptGroupNames[0]).length == 0 || 
                (this.object.AdaptGroupNames[1]).length == 0 || 
                (this.object.AdaptGroupNames[2]).length == 0){
                    return false;
                } else return true;      
            }
            case 'LC':{
                if((this.object.LCNames[0]).length == 0){
                    return false;
                }else return true;
            }
            case 'SelAC':{
                if((this.object.SelACNames[0]).length == 0){
                    return false;
                }else return true;
            }
            case 'SA':{
                if ((this.object.SANames[0]).length == 0){
                    return false;
                }else return true;
            }
            //default: throw 'Invalid parameter!';
        };
    }

    // createTable(){
    //     var div = document.createElement("div");
    
    //     var res = document.body.appendChild(div).setAttribute("id", this.type);

    //     var table = document.createElement("table");
    //     var putTable = document.getElementById(this.type);
    //     putTable.setAttribute("id", "resultTable");

    //     table.style.border = "2px solid #456789";
    //     table.createCaption().innerHTML = `<b>Results: ${this.type}</b>`;

    //     var printTable = (labelsHead, array) => {
    //         var row = table.insertRow();

    //         for (var i = 0; i < labelsHead.length; i++) {
    //             var headerCell = document.createElement("th");
    //             headerCell.innerHTML = labelsHead[i];
    //             row.appendChild(headerCell);
    //         }

    //         var tableLen = array[0].length;
    //         var tableHigh = array.length;
    //         console.log(tableLen, tableHigh);
    //         for(var i = 0; i < tableLen; i++){
    //             var tr = table.insertRow();
    //             // var td2 = tr.insertCell();
    //             //     td2.appendChild(document.createTextNode(object[i][j]));
    //             //     td2.style.border = "1px solid #456";    
    //             // th1.appendChild(document.createTextNode('Adaptation value'));
    //             // th1.style.border = "1px solid #456";
    //             for (var j = 0; j < tableHigh; j++){
    //                 var td = tr.insertCell();
    //                 td.appendChild(document.createTextNode(array[j][i]));
    //                 td.style.border = "1px solid #456";    
    //             }
    //         }

    //         putTable.insertAdjacentElement("beforeend", table);
    //     }

    //     switch (this.type){
    //         case 'Param':{      
    //             printTable([this.object.ParamGroupNames[0], this.object.ParamGroupNames[1], this.object.ParamGroupNames[2]],
    //                        [this.object.ParamNames[0], this.object.ParamNames[1], this.object.ParamNames[2]]);
    //         }
    //         case 'CO':{
    //             printTable([], [this.object.CONames[0]]);
    //         }
    //         case 'BS':{
    //             printTable([this.object.BSGroupNames[0], this.object.BSGroupNames[1], this.object.BSGroupNames[2]],
    //                        [this.object.BSSettingsNames[0], this.object.BSSettingsNames[1], this.object.BSSettingsNames[2]]);
    //         }
    //         case 'AD':{
    //             printTable([this.object.AdaptGroupNames[0], this.object.AdaptGroupNames[1], this.object.AdaptGroupNames[2]],
    //                        [this.object.AdaptNames[0], this.object.AdaptNames[1], this.object.AdaptNames[2]]);
    //         }
    //         case 'LC':{
    //             printTable([1], [this.object.LCNames[0]]);
    //         }
    //         case 'SelAC':{
    //             printTable([1,1], [this.object.SelACNames[0]]);
    //         }
    //         case 'SA':{
    //             printTable([1], [this.object.SANames[0]]);
    //         }
    //         //default: throw 'Invalid parameter!';
    //     };
        

    }

 