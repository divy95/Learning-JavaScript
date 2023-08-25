// let loggedin=true
// let loggedinfromgoogle=false
// let debitcard=true
// let loggedinfromemail=true
// if(loggedin && debitcard && 2==2){
//     console.log("you can make transactions");
// }
// if(loggedinfromemail || loggedinfromgoogle){
//     console.log("User logged in");
// }
// -----Switch case------
// const month=3
// switch (month) {
//     case 1:
//         console.log("This is January");
//         break;
//     case 2:
//         console.log("This is February");
//         break;
//     case 3:
//         console.log("This is March");
//         break;//if i will not not break here then it will execute the further code which is after it
//     case 4:
//         console.log("This is April");
//         break;
//     case 3:
//         console.log("This is May");
//         break;

//     default:
//         console.log("Value not found");
//         break;
// }
// const Days="Monday"
// switch (Days) {
//     case "Monday":
//         console.log("This is mon");
//         break;
//     case "Tuesday":
//         console.log("This is Tue");
//         break;
//     case "Wednesday":
//         console.log("This is Wed");
//         break;//if i will not not break here then it will execute the further code which is after it
//     case "Thursday":
//         console.log("This is Thursday");
//         break;
//     case "friday":
//         console.log("This is Friday");
//         break;
//     case "Saturday":
//         console.log("This is Saturday");
//         break;

//     default:
//         console.log("Value not found");
//         break;
// }
//nullish coalescing Operator(??)::null undefined
let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1= undefined ?? 15
val1=null ?? 10 ?? 20
console.log(val1);
// -------Terniary operator-----
// condition ? true:false
const icePrice=100
icePrice<=80? console.log("Less than  80"):console.log("Greater than 80");