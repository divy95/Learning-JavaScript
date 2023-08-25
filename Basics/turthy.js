const userEmail="Divy@gmail.com"
const userEmail1=[]
// we have assumed the value inside string is truth
if(userEmail){
    console.log("Got user email")
}else {
    console.log("dont have user email");
}

//falsy value
//false, 0, -0 , BigInt 0n,"", null, undefined, NaN
// and other are truthy varlue
//"0" value is inside string, "false", " ",[] ,{} , function(){} 

// if(userEmail1.length===0){
//     console.log("Array is empty");
// }
const emptyobj={}
if(Object.keys(emptyobj).length===0){
   console.log("Object is empty");
}