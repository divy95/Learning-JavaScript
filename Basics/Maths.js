const score = 400
const balance =new Number(100)//now this is fixed that this is a number
// console.log(balance)
// console.log(balance.toString().length)
// now this is strong and i have found the length too
// console.log(balance.toFixed(2))//100.00 used in ecommerece application
const otherNumber=1123.8996
// console.log(otherNumber.toPrecision(4))//this return string type
const hundreds=1000000//sometimes it is difficult to see all these 0s
// console.log(hundreds.toLocaleString());
// By default answer will be in US standards 1,000,000
console.log(hundreds.toLocaleString('en-IN'))//10,00,000
// +++++++++++++++++++++ Maths ++++++++++++++
console.log(Math)//this itself is an object
// console.log(Math.PI)
// console.log(Math.abs(-23))//this only give absolute value do not change +ve to -ve
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.2));//Give top value
// console.log(Math.floor(4.6));//Give floor value
// console.log(Math.min(4,3,2,1));//give min value
// console.log(Math.max(4,3,2,1));//giev max value
// mostly used function in js is Math.

console.log(Math.random())
// this value will always b/w 0 and 1
console.log(Math.random())
console.log((Math.floor(Math.random()*10))+1)
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)//Imp make notes of this formula
// value will be b/w 10 and 20