// First Programme
const person={
    name:"Divy",
    Age:25,
    City:"Rura"

}
console.log(person.City)
console.log(person.name)
console.log(person.Age)
// Concept of Objects
// Singleton

//Object literals
// Object.create  
// making object through constructor
const mySym=Symbol("key1");  //symbol
//if you want to use the symbol  as a key we can not do it directly
const JsUser={
    name1:"Divy", //key=name1 value=Divy
   "full name":"Divy pratap singh",//why do we need to learn two method to access the object
   //there is no chance to access the object using the . property
   //we have to use the second method
    age:25,
    location:"Kanpur",
    email:"divy@gmail.com",
    isLoggedin:false,
    [mySym]:"mykey1",

    lastLoginDays:["Monday","Saturday"]
};
console.log(JsUser.email)//some people access object like this 
//though this is correct but should not access like this
console.log(JsUser["email"]);
// console.log(JsUser.full name); this is the wrong method this will give error
console.log(JsUser["full name"]); //this is the only method to access the full name property
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);// check the data type of it this will give the string
//but we want to use as a symbol
console.log( JsUser[mySym])
console.log(typeof JsUser[mySym])
// changing the value
JsUser.email="divy@yahoo.com"
// if we want to freeze the object and we want this should not be 
// Object.freeze(JsUser)
JsUser.email="divy@microsoft"
console.log(JsUser.email);
//see here the value has not been change after freeze and also it has not given any error
// console.log(JsUser);
// Adding function in Object
JsUser.greeting=function(){
    console.log("Hello js user");
}
JsUser.greeting2=function(){
    console.log(`Hello js user,${this.name1}`);
}
// use backtick called string interpolation
 console.log(JsUser.greeting); //this will give a function return back
console.log(JsUser.greeting());//this will give error that it is not a function
// so for this first unfreeze the Object
console.log(JsUser.greeting2());