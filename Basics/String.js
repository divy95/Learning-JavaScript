const name="Divy"
const repo=8
// console.log(name + repo + "Value");
console.log(`hello my name is ${name} and my repo count is ${repo}`);
// One more method to declare an String
const gameName=new String('Divy-Pratap')
//Key value pair access
console.log(gameName[0]);
//Accessing prototype
console.log(gameName.__proto__);
//Giving Length
console.log(gameName.length)
//All words to uppercase
console.log(gameName.toUpperCase())
//All words to lower case
console.log(gameName.toLowerCase());
//Local alphabet upppercase
console.log(gameName.toLocaleUpperCase());
//Position of character
console.log(gameName.charAt(1));
//character at which position
console.log(gameName.indexOf('v'));
// slice
const newString=gameName.substring(0,4)
// this will value from 0 to 3 except 4th value
console.log(newString);