export const rectangles = (()=>{
    let testArray=[];
    let startWidth=30;
    let changeWidth=3;
    let numRect = 20;

    for(let i=0; i<numRect; i++){
        if(i%2===0){
            testArray.push({
                width:`-${startWidth + i*changeWidth}%`
            })
        }
        else{
            testArray.push({
                width:`${startWidth + i*changeWidth}%`
            })  
        }
    }
    return testArray;
})();