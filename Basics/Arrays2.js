const marvel_heroes=["Thor","Ironman","Spiderman","hulks"]
const dc_heroes=["Flash","Superman","Batman"];
// marvel_heroes.push(dc_heroes)
//People thinks that push will merge the arrays but it does'nt work like this
//So array can take any type of data so here first arrays has taken second array as a data
// console.log(marvel_heroes);
// console.log(marvel_heroes[4]);//it will give the whole array bcs at index 4 we have whole array
// console.log(marvel_heroes[4][1]);
// const value=marvel_heroes.concat(dc_heroes)
// console.log(value);//this concat method will merge both the array and will make one single array
// Easy method spread operator sprea out value
const all=[...marvel_heroes,...dc_heroes]
// console.log(all);
const another_arr=[1,2,3,[4,5],[6,7,[4,5]]];
const real_another_arr=another_arr.flat(Infinity);
// the value inside is depth
// console.log(real_another_arr)
// sometimes data comes to us in different-different form from other websites but we want array
console.log(Array.isArray("Divy"));
// this will give false because it is not the array
console.log(Array.from("Divy"));
// this has converted string to array
console.log(Array.from({name:"Divy"})); //imp for interview
// this will give empty Array yha batana padega ki keys se array banaye ya values se
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

// is from of these are important methods read more about it
