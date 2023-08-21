// function add(a,b){
//    console.log(a+b);
// }
//add(4,5);

function add(a,b){
   return a+b;
}
const result=add(4,5);
// console.log(result);

function loggedin(username="Sam"){
    if(!username){
       return("Please enter a username first")
    }
    return `${username} Just Logged in`
}

console.log(loggedin("Divy"));