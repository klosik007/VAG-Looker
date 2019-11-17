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
        document.title = `VAG Looker - ${label}`;
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
                if((this.object.BSSettingsNames[0]).length == 0 ||  
                    (this.object.BSSettingsNames[1]).length == 0 || 
                    (this.object.BSSettingsNames[2]).length == 0){
                        return false
                    }else return true;
            }
            case 'AD':{
                if((this.object.AdaptNames[0]).length == 0 || 
                (this.object.AdaptNames[1]).length == 0 || 
                (this.object.AdaptNames[2]).length == 0){
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
}

 