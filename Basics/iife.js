// why do we need a function which execute immediately
//sometimes we write a file where  there is only database connection 
//and we want that as soon as the appplicatin start at that time inside that file database executin get start
(function play(){
    // named iife
    console.log("Db connected");
})();
// i have to use ; here because function invoke to ho gya ab use pata nhi hai rokna kha pe hai
// that's why next function will give the error so that is why to stop the error i will use semicolon


// definition of iife:global scope ke pollution se problem hoti hai kai baar
//to global scope ke jo bhi variable hai ya wha jo bhi declaration hai uske pollution ko hatane ke lie
((name)=>{
    // unnamed iife
    console.log(`Db connected secoond time ${name}`);
})('divy');
//passing arguments

(()=>{
    console.log('db conneted third time');
})();