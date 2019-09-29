import { GetMatches } from './GetMatches';

export const ParseFile = (file) =>{
    var ParametersGroupNameRegex = /^(\d{3}|\d{1})\,([0])\,(.*)/gm; //001,0,General or 1,0,Compressor
    var ParametersGroupNames = {
        ParamGroup: GetMatches(file, ParametersGroupNameRegex, 1),
        ParamGroupNum : "0",
        ParamGroupName: GetMatches(file, ParametersGroupNameRegex, 3)
    };

    var ParametersNamesRegex = /^(\d{3}|\d{1})\,([^0]|[0-9][0-9])\,(.*)/gm;//001,1,Voltage Supply,(Terminal 15),Specifcation: 0.0...15.0 V or 1,1,Switch OFF status,0=OK 7=Man. OFF
    var ParametersNames = {
        ParamGroup: GetMatches(file, ParametersNamesRegex, 1),
        ParamNum: GetMatches(file, ParametersNamesRegex, 2),
        ParamDesc: GetMatches(file, ParametersNamesRegex, 3)
    };

    var BasicSettingsGroupNamesRegex = /[B](\d{3}|\d{2})\,([0])\,(.*)/gm;//B001,0,Adjustment Position (Step 1)
    var BasicSettingsGroupnames = {
        BSGroup: GetMatches(file, BasicSettingsGroupNamesRegex, 1),
        BSGroupNum : "0",
        BSName: GetMatches(file, BasicSettingsGroupNamesRegex, 3),
    };

    var BasicSettingsNamesRegex = /[B](\d{3}|\d{2})\,([^0])\,(.*)/gm;//B001,1,Status, ,
    var BasicSettingsNames = {
        BSGroup: GetMatches(file, BasicSettingsNamesRegex, 1),
        BSNum: GetMatches(file, BasicSettingsNamesRegex, 2),
        BSDesc: GetMatches(file, BasicSettingsNamesRegex, 3)
    };

    var AdaptationsNamesRegex = /^\A(\d{3}|\d{2})\,([0])\,(.*)/gm; //A01,0,Reception Optimization or A001,0,Reception Optimization
    var AdaptationsGroupnames = {
        ADGroup: GetMatches(file, AdaptationsNamesRegex, 1),
        ADNum: "0",
        ADName: GetMatches(file, AdaptationsNamesRegex, 3),
    };

    var CodingsNamesRegex = /^\C(\d{0,})\,(.*)/gm; //C01,??xxx: Equipment
    var CodingsNames = {
        COName:  GetMatches(file, CodingsNamesRegex, 2),
    };

    var LongCodingsRegex = /\L\C\,(\d{2})\,(.{0,})\,(.*)/gm; //LC,00,1,CD-Changer/iPod/USB Connection Monitoring active
    var LongCodingsNames = {
        LCByte: GetMatches(file, LongCodingsRegex, 1),
        LCBit: GetMatches(file, LongCodingsRegex, 2),
        LCDesc: GetMatches(file, LongCodingsRegex, 3)
    };

    var SelectiveActivationsNamesRegex = /^\T(\d*)\,(.*)/gm; //T1543,Parking Aid Warning Chime (H15)
    var SelectiveActivationsNames = {
        SelACBytes: GetMatches(file, SelectiveActivationsNamesRegex, 1),
        SelACName: GetMatches(file, SelectiveActivationsNamesRegex, 2),
    };

    var SecurityAccessLoginsRegex = /([L|S]\d*)\,(.*)/gm; //S01,13861 = Adaptation Enabling or L01,11463 = Cruise Control System (CCS) Activation
    var SecurityNames = {
        SAName: GetMatches(file, SecurityAccessLoginsRegex, 2)
    };

    return {
        ParamGroupNames : ParametersGroupNames,
        ParamNames : ParametersNames,
        BSGroupNames : BasicSettingsGroupnames,
        BSSettingsNames : BasicSettingsNames,
        AdaptGroupNames : AdaptationsGroupnames,
        CONames : CodingsNames,
        LCNames : LongCodingsNames,
        SelACNames : SelectiveActivationsNames,
        SANames : SecurityNames
    };
};