// # Primitive
//String,Number,Boolean,null,undefined,Symbol,BigInt

// #Non Primitive
// Object, Arrays,Functions

// JavaScript is Dynamically type Language You need not to 
// define dataType it will be determined at runtime based on their value

const id=Symbol('123');
const anotherId=Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id==anotherId);//false this will be unique
// Arrays
const fruits=["apple","Banana","Fig","Papaya"]
// Object
const car={
    name:"BMW",
    model:2018,
    Speed:150
}
// function

const fun= function(){
    console.log("Hello Javascript");
}
console.log(typeof fun);
console.log(typeof car);
console.log(typeof fruits);