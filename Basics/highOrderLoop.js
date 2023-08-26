//high order loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5,6,7,8]
for (const value of arr) {
    console.log(value);
}
const greeting="hello world"
for (const greet of greeting) {
    if(greet==" "){ //removing the space
        continue
    }
    console.log(`Each char is ${greet}`);
}

// Maps
// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('IN',"India")//maps are known as for unique values and in which order you have entered
                     // they remains in same order
// console.log(map)

// for (const [key,value] of map) {
//     console.log(key+":- "+value)
// }


const myObj={
    'Game1':'NFS',
    'Game2':'Spiderman',
    'Game3':'ViceCity'
}

// for (const [key,value] of myObj) {
//     // this Object can  not be iterate like normal map
// //for of is not useful for object
// }

const myObject={
    js:'JavaScript',
   cpp:'C++',
   rb:'Ruby',
   swift:'Swift by apple'
}

for (const key in myObject) {
console.log(`${key} shortcut is for${myObject[key]}`)
}
const programing=["js","fkg","fg","sd"];
for (const key in programing) {
  console.log(programing[key]);
}



// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('IN',"India")
// for (const key in map) {
//     console.log(key);
// }
// map is not iteratable