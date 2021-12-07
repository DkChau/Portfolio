export const rectangles = (()=>{
    let testArray=[];
    let startWidth=40;
    let changeWidth=5;
    let numRect = 20;

    for(let i=0; i<(numRect/2); i++){
        testArray.push(
            {
                width:`-${startWidth + i*changeWidth}%`
            },
            {
                width:`${startWidth + i*changeWidth}%`
            },
        )
    }
    return testArray;
})();