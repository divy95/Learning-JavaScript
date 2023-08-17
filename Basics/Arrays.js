//Arrays

const myArr=[0,1,2,3,4,5,6];
const myArr2=new Array(1,2,3,4);

//Important Methods
// myArr.push(6);

// myArr.pop();

// myArr.unshift(9)
//add value at starting but for large value suppose 10000 it will shift all the values

// myArr.shift()
// console.log(myArr.includes(3)); //true
// console.log(myArr.includes(7));//false
// console.log(myArr.indexOf(3));//give index
const newArr=myArr.join()
console.log(typeof newArr);//this is string join and change to string
//Slice and Splice
console.log("A ",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);
const myn2=myArr.splice(1,3)
console.log("C ",myArr);

console.log(myn2);
