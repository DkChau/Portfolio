export const rectangles = (()=>{
    let testArray=[];
    let startWidth=90;
    let numRect = 20;

    for(let i=0; i<(numRect/2); i++){
        testArray.push(
            {
                width:`-${startWidth}%`
            },
            {
                width:`${startWidth}%`
            },
        )
    }
    return testArray;
})();