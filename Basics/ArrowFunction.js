const play=()=>console.log("I am playing")
// we are holding the function in a variable
play();
const play2=()=>{
    console.log("Both are playing");
    
}
play2()
// Arrow function in javaScript
const add=(num1,num2)=>{
    return(num1+num2)
}
const add2=(num1,num2)=> num1+num2 //implicit return
// curly braces me wrap kiya to return keyword likhna padega
//paranthasis me likha to () nhi likna padega return
const result=add(4,5)
console.log(result);
// returning object using arrow function
const value=()=>({username:"Divy"})
console.log(value());


