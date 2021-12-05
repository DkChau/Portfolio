export const rectangles = (()=>{
    let testArray=[];
    let startWidth=80;
    let numRect = 20;

    for(let i=0; i<numRect; i++){
        if(i<=1 || i>=18){
            if(i%2===0){
                testArray.push({
                    width:`-${50}%`
                })
            }
            else{
                testArray.push({
                    width:`${50}%`
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

// export const rectangles = [
//     {width:'-30%'},
//     {width:'30%'},
//     {width:'-40%'},
//     {width:'40%'},
//     {width:'-50%'},
//     {width:'50%'},
//     {width:'-60%'},
//     {width:'60%'},
//     {width:'-70%'},
//     {width:'70%'},
//     {width:'-70%'},
//     {width:'70%'},
//     {width:'-60%'},
//     {width:'60%'},
//     {width:'-50%'},
//     {width:'50%'},
//     {width:'-40%'},
//     {width:'40%'},
//     {width:'-30%'},
//     {width:'30%'},
// ]
