//Dates
// Date is an object in javaScript
let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);
// let myCreateDate=new Date(2023,0,23)
// let myCreateDate=new Date(2023,0,23,5,3,54)
// format is like this:YYYY:MM:DD HH:MM:SS
// In js month start from 0
// console.log(myCreateDate.toLocaleString()); //1/23/2023, 5:03:54 AM
let myCreateDate=new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString())
let myTimeStamp=Date.now()
console.log(myTimeStamp);