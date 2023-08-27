// const coding=["Js","Ruby","java","Python","CPP"]
// const value=coding.forEach((item)=>{
//     // console.log(item);
//     return item   //output:for Each does not return any value
// })
// console.log(value);
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums=myNums.filter((num)=>{
//    return num>4  //Return is required for curly braces

// })

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
// newNums.push(num)
//     }
// })

// console.log(newNums)
const books = [{
        title: "Book One",
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book two",
        genre: 'Non-Fiction',
        publish: 1982,
        edition: 2008
    },
    {
        title: "Book three",
        genre: 'Action',
        publish: 1983,
        edition: 2007
    },
    {
        title: "Book four",
        genre: 'History',
        publish: 1984,
        edition: 2006
    },
    {
        title: "Book five",
        genre: 'Thriller',
        publish: 1985,
        edition: 2009
    },
    {
        title: "Book six",
        genre: 'Comedy',
        publish: 1986,
        edition: 2004
    },
    {
        title: "Book seven",
        genre: 'Fiction',
        publish: 1987,
        edition: 2006
    },
    {
        title: "Book eight",
        genre: 'History',
        publish: 1988,
        edition: 2012
    },
    {
        title: "Book nine",
        genre: 'Noo-Fiction',
        publish: 1989,
        edition: 2015
    },
    {
        title: "Book ten",
        genre: 'Fiction',
        publish: 1990,
        edition: 2023
    },
]
let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) => {
    return bk.publish >= 1988 && bk.genre === 'History'
})
console.log(userBooks)