export const rectangles = (()=>{
    let testArray=[];
    let startWidth=40;
    let changeWidth=2;
    let numRect = 20;

    for(let i=0; i<numRect; i=i+2){
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