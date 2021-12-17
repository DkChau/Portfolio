export const rectangles = (()=>{
    let testArray=[];
    let startWidth=100;
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
    // testArray.push(
    //     {
    //         width:`0%`
    //     },
    //     {
    //         width:`0%`
    //     },
    // )
    return testArray;
})();