// const tinderUser=new Object();//Singelton object 
const tinderUser={};//non singelton object both object will give same value
 tinderUser.id="123abc";
 tinderUser.name="Sam"
 tinderUser.isLoggedIn=false
//  console.log(tinderUser);
// Object inside Object
const regularuser={
    email:"divy@123",
    fullname:{
        userfullname:{
        firstname:"divy",
        lastname:"singh"
        }
    }
}

// console.log(regularuser.fullname?.userfullname.lastname);
// there is also a concept of optional channing let suppose if fullname is not present
//see the question mark if it not there then we have to use if and else 

// combining the Object
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={4:"a",5:"b"}
//  const obj3={obj1,obj2} 
 //we can not do this here same problem like array the object inside the object
// it will not merge
// console.log(obj3);
// const obj3=Object.assign({},obj1,obj2,obj4)//use like this
// instead of console.log(obj1,obj2);
// becauuse target here target will be obj1 but for 1st one target will be the empty object{}
// console.log(obj3);
//... ...using spread operator
const obj3={...obj1,...obj2,...obj4};
console.log(obj3);
// value coming from database
//let suppose users has arrived the users will arrive as array of object
const users=[
    {
        id:1,
        email:"divy@gmail"
    },
    {
        id:2,
        email:"divy1@gmail"
    },
    {
        id:3,
        email:"divy2@gmail"
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
// notice:the keys that we will get from here the datatype will be array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// sometime we are looping throuhg an object
// and extracting the value 
// and sometimes the value do not exist so it can be crash
console.log(tinderUser.hasOwnProperty('isLogged'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
