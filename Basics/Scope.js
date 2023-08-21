function one(){
    const username="divy"
    function two(){
        const website="youtube"
        console.log(username);// this can access the username
    }
    console.log(website) //but this can not access the website variable will give the error 
    // two();

}
// one();
// ------++++---+++---
if(true){
    const username="Divy"
    if(username==="Divy"){
        const website=" google"
        console.log(username + website );
        
    }
    // console.log(website)   //error  
}
// console.log(username)  // error
// +++++++-----Interesting---+++++
console.log(addone(5));

function addone(num){   //we can create function like this
    return num+1
}


addtwo(5);
const addtwo= function(num){ //we can also create function like this 😀javascript variables are too powerfull 
    return num+2
}





