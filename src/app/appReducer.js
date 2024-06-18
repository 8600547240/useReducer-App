export const appReducer = (currData,newData) => {
    switch(newData.type){
        case 'NAME_UPDATE':
            currData = {
                ...currData,
                name: newData.payload
            }
            break;
        case 'LOC_UPDATE':
            currData = {
                ...currData,
                loc: newData.payload
            }
            break;
    }
    return currData;
}