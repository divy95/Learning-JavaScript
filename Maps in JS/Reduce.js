// const array1=[1,2,3,4]
// const initialValue=0;
// const sumWithInitial=array1.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue);
// console.log(sumWithInitial); 

const myNums=[1,2,3,4,5];
const total=myNums.reduce((acc,currval)=>acc+currval,0)
console.log(total)

const shoppingCart=[
    {
      itemName:'Js Course',
      price:999
   },
    {
      itemName:'Java Course',
      price:1999
   },
    {
      itemName:'Python Course',
      price:2999
   },
    {
      itemName:'DataScience Course',
      price:3999
   }
   
]
const totalVal=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalVal);