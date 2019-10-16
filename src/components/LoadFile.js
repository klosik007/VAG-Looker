export const LoadFile = (source) =>{

    try {
        var labelFile = new XMLHttpRequest();
        labelFile.open("GET", source, false); //request is synchronous, otherwise I couldn't saved answer content to variable so simple
        labelFile.send(null);

        if (labelFile.readyState == 4 && labelFile.status == 200) {
            var content = labelFile.responseText;
            return content;
        }
    } catch (error) {
        return false;
    }  
}