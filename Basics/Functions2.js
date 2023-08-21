//  function calulateCartPrice(num1){     //this will create problem 
//     return num1
// }
// console.log(calulateCartPrice(200,300,400,500));
 function calulateCartPrice(val1,val2,...num1){    //rest operator    
 return num1  //here val1 has 200 and val2 has 300   
}
console.log(calulateCartPrice(200,300,400,500));

const user={
    name:"divy",
    price:100
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObject(user);
// we can also pass user directly
handleObject({
 name:"divy",
 price:"10000"
});

const mynewArray=[343,343,45,656];
function returnsecvalue(getArray){
 return getArray[1];
}
// console.log(returnsecvalue(mynewArray))
// we can also pass the array directly
console.log(returnsecvalue([3434,565,565,78]));