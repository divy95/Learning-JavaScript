const name="Divy"
const repo=8
// console.log(name + repo + "Value");
console.log(`hello my name is ${name} and my repo count is ${repo}`);
// One more method to declare an String
const gameName=new String('Divy-Pratap-Singh')
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
const anotherString=gameName.slice(-8,4)
console.log(anotherString);//this will give empty String
// trim method
const name1="    Divy      "
// this will remove all the spaces from the String
console.log(name1.trim());

const url="https://Divy.com/divy%20pratap" //Now i want to remove this %from the url

console.log(url.replace('%20','-'));

// https://Divy.com/divy-pratap this will be the output
console.log(url.includes('Divy'))
const gameName2="Di-vy Pra-tap Singh";
console.log(gameName2.split('-'));
//Splitted the string basis on dash