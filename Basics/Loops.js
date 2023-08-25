//for loop
let array=[1,23,4,5,6,7,67,9]
for (let index = 0; index < array.length; index++) {
   
    const element = array[index];
    if(element==5){
        //console.log(" 5 is best number")
    }
    console.log(element)
}

    // break;
    // continue;

    // for (let index = 1; index <= 20; index++) {
        
    //     if(index==5){
    //        console.log("5 detected bahar jao loop se break ka use karke")
    //         break;
    //     }
    //     console.log(`value of i is ${index}`);
        
    // }
    for (let index = 1; index <= 20; index++) {
        
        if(index==5){
           console.log("Detected 5")
           continue
        }
        console.log(`value of i is ${index}`);
        
    }
