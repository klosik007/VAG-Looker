export const ParseFile = (file) =>{
    var ParametersGroupNameRegex = / (\d{3}|\d{1})\,[0]\,(.{0,}) /; //001,0,General or 1,0,Compressor
    var ParametersGroupNames = file.match(ParametersGroupNameRegex);

    var ParametersNamesRegex = / ((\d{3}|\d{1})\,[^0]\,)(.{0,}) /;//001,1,Voltage Supply,(Terminal 15),Specifcation: 0.0...15.0 V or 1,1,Switch OFF status,0=OK 7=Man. OFF
    var ParametersNames = file.match(ParametersNamesRegex);

    var BasicSettingsGroupNamesRegex = / ([B]\d{3}\,[0]\,)(.{0,}) /;//B001,0,Adjustment Position (Step 1)
    var BasicSettingsGroupnames = file.match(BasicSettingsGroupNamesRegex);

    var BasicSettingsNamesRegex = / ([B]\d{3}\,[^0]\,)(.{0,}) /;//B001,1,Status, ,
    var BasicSettingsNames = file.match(BasicSettingsNamesRegex);

    var AdaptationsNamesRegex = / ([A](\d{3}|\d{2})\,[0]\,)(.{0,}) /; //A01,0,Reception Optimization or A001,0,Reception Optimization
    var AdaptationsGroupnames = file.match(AdaptationsNamesRegex);

    var CodingsNamesRegex = / ([C]\d{0,})\,(.{0,}) /; //C01,??xxx: Equipment
    var CodingsNames = file.match(CodingsNamesRegex);

    var LongCodingsRegex = / (LC)\,(\d{2})\,(.{0,})\,(.{0,}) /; //LC,00,1,CD-Changer/iPod/USB Connection Monitoring active
    var LongCodingsNames = file.match(LongCodingsRegex); 

    var SelectiveActivationsNamesRegex = / ([T]\d{0,})\,(.{0,}) /; //T1543,Parking Aid Warning Chime (H15)
    var SelectiveActivationsNames = file.match(SelectiveActivationsNamesRegex);

    var SecurityAccessLoginsRegex = / ([L|S]\d{0,})\,(.{0,}) /; //S01,13861 = Adaptation Enabling or L01,11463 = Cruise Control System (CCS) Activation
    var SelectiveActivationsNames = file.match(SecurityAccessLoginsRegex);

    
};