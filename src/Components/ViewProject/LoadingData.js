export const rectangles = (()=>{
    let testArray=[];
    let startWidth=100;
    let numRect = 20;

    for(let i=0; i<(numRect/2); i++){
        testArray.push(
            {
                width:`-${startWidth}%`,
                widthResponsive:`-100%`
            },
            {
                width:`${startWidth}%`,
                widthResponsive:`100%`
            },
        )
    }
    return testArray;
})();