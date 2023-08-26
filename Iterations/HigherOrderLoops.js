const coding=["Ruby","Java","Python","Cpp"];
// coding.forEach(function(element) {
//     console.log(element)
// });
// coding.forEach((item)=>{
// console.log(item);
// })
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)
// coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);
// })
const myCoding=[
    {
        languageName:"Java",
        languageFilename:"jsva"
    },
    {
        languageName:"JavaScript",
        languageFilename:"js"
    },
    {
        languageName:"Python",
        languageFilename:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})