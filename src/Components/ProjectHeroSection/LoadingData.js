export const rectangles = (()=>{
    let testArray=[];
    let startWidth=90;
    let numRect = 20;

    for(let i=0; i<numRect; i++){
        if(i<=1 || i>=18){
            if(i%2===0){
                testArray.push({
                    width:`-30%`
                })
            }
            else{
                testArray.push({
                    width:`30%`
                })  
            }
        }
        else{
            if(i%2===0){
                testArray.push({
                    width:`-${startWidth}%`
                })
            }
            else{
                testArray.push({
                    width:`${startWidth}%`
                })  
            }
        }
    }
    return testArray;
})();