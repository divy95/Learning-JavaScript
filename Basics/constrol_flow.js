let loggedin=true
let loggedinfromgoogle=false
let debitcard=true
let loggedinfromemail=true
if(loggedin && debitcard && 2==2){
    console.log("you can make transactions");
}
if(loggedinfromemail || loggedinfromgoogle){
    console.log("User logged in");
}