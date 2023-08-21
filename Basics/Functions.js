// function add(a,b){
//    console.log(a+b);
// }
//add(4,5);

function add(a,b){
   return a+b;
}
const result=add(4,5);
// console.log(result);

function loggedin(username="Sam"){//here the valur will never be undefined if we will not passed anything then the default value will be sam
    // if we have passed the value then it will not print the default value
    if(!username){
       return("Please enter a username first")
    }
    return `${username} Just Logged in`
}

console.log(loggedin("Divy"));
