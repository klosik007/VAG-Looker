import { GetMatches } from './GetMatches';


export const ParseFile = (file) =>{
    // var ParametersGroupNameRegex = /^(\d{3}|\d{1})\,([0])\,(.*)/gm; //001,0,General or 1,0,Compressor
    // // var ParametersGroupNames = [
    // //     GetMatches(file, ParametersGroupNameRegex, 1),
    // //     GetMatches(file, ParametersGroupNameRegex, 2),
    // //     GetMatches(file, ParametersGroupNameRegex, 3)
    // // ];

    var ParametersNamesRegex = /^(\d{1,3})\,([0-9]|[0-9][0-9])\,(.*)/gm;//001,1,Voltage Supply,(Terminal 15),Specifcation: 0.0...15.0 V or 1,1,Switch OFF status,0=OK 7=Man. OFF
    var ParametersNames = [
        GetMatches(file, ParametersNamesRegex, 1),
        GetMatches(file, ParametersNamesRegex, 2),
        GetMatches(file, ParametersNamesRegex, 3)
    ];

    // var BasicSettingsGroupNamesRegex = /[B](\d{3}|\d{2})\,([0])\,(.*)/gm;//B001,0,Adjustment Position (Step 1)
    // var BasicSettingsGroupnames = [
    //     GetMatches(file, BasicSettingsGroupNamesRegex, 1),
    //     GetMatches(file, BasicSettingsGroupNamesRegex, 2),
    //     GetMatches(file, BasicSettingsGroupNamesRegex, 3),

    // ];

    var BasicSettingsNamesRegex = /[B](\d{3}|\d{2})\,([0-4])\,(.*)/gm;//B001,1,Status, ,
    var BasicSettingsNames = [
        GetMatches(file, BasicSettingsNamesRegex, 1),
        GetMatches(file, BasicSettingsNamesRegex, 2),
        GetMatches(file, BasicSettingsNamesRegex, 3)
    ];

    // var AdaptationsGroupNamesRegex = /^\A(\d{3}|\d{2})\,([0])\,(.*)/gm; //A01,0,Reception Optimization or A001,0,Reception Optimization
    // var AdaptationsGroupNames = [
    //     GetMatches(file, AdaptationsGroupNamesRegex, 1),
    //     GetMatches(file, AdaptationsGroupNamesRegex, 2),
    //     GetMatches(file, AdaptationsGroupNamesRegex, 3),
    // ];

    var AdaptationsNamesRegex = /^\A(\d{3}|\d{2}|\d{1})\,([0-9]|[0-9][0-9])\,(.*)/gm;
    var AdaptationsNames = [
        GetMatches(file, AdaptationsNamesRegex, 1),
        GetMatches(file, AdaptationsNamesRegex, 2),
        GetMatches(file, AdaptationsNamesRegex, 3),
    ];

    var CodingsNamesRegex = /^C(\d\d|\d)\,(.*)/gm; //C01,??xxx: Equipment
    var CodingsNames = [
        GetMatches(file, CodingsNamesRegex, 2)
    ];

    var LongCodingsRegex = /\L\C\,(\d{2})\,(.{0,})\,(.*)/gm; //LC,00,1,CD-Changer/iPod/USB Connection Monitoring active
    var LongCodingsNames = [
        GetMatches(file, LongCodingsRegex, 1),
        GetMatches(file, LongCodingsRegex, 2),
        GetMatches(file, LongCodingsRegex, 3)
    ];

    var SelectiveActivationsNamesRegex = /^\T(\d*)\,(.*)/gm; //T1543,Parking Aid Warning Chime (H15)
    var SelectiveActivationsNames = [
        GetMatches(file, SelectiveActivationsNamesRegex, 1),
        [],
        GetMatches(file, SelectiveActivationsNamesRegex, 2)
    ];


    var SecurityAccessLoginsRegex = /(L|S)(\d\d)\,(.*)/gm; //S01,13861 = Adaptation Enabling or L01,11463 = Cruise Control System (CCS) Activation
    var SecurityNames = [
        GetMatches(file, SecurityAccessLoginsRegex, 3)
    ];

    return {
        //ParamGroupNames : ParametersGroupNames,
        ParamNames : ParametersNames,
        //BSGroupNames : BasicSettingsGroupnames,
        BSSettingsNames : BasicSettingsNames,
        //AdaptGroupNames : AdaptationsGroupNames,
        AdaptNames: AdaptationsNames,
        CONames : CodingsNames,
        LCNames : LongCodingsNames,
        SelACNames : SelectiveActivationsNames,
        SANames : SecurityNames
    };
};