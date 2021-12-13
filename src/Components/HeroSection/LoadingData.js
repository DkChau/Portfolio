export const rectangles = (()=>{
    let testArray=[];
    let startWidth=55;
    let changeWidth=5;
    let numRect = 20;

    for(let i=0; i<(numRect/2); i++){
        testArray.push(
            {
                width:`-${startWidth + i*changeWidth}%`,
                widthResponsive:'-90%'
            },
            {
                width:`${startWidth + i*changeWidth}%`,
                widthResponsive:'90%'
            },
        )
    }
    return testArray;
})();