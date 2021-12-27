export const rectangles = (()=>{
    let testArray=[];
    let startWidth=55;
    let numRect = 20;

    for(let i=0; i<numRect; i++){
        if(i<=3 || i>=16){
            if(i%2===0){
                testArray.push({
                    width:`-${70}%`,
                    widthResponsive:'-90%'
                })
            }
            else{
                testArray.push({
                    width:`${70}%`,
                    widthResponsive:'90%'
                })  
            }
        }
        else{
            if(i%2===0){
                testArray.push({
                    width:`-${startWidth}%`,
                    widthResponsive:'-90%'
                })
            }
            else{
                testArray.push({
                    width:`${startWidth}%`,
                    widthResponsive:'90%'
                })  
            }
        }
    }
    return testArray;
})();

