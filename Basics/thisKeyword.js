let person={
    myName:"Divy",
    money:"999",
   welcomemsg:function(){
    console.log(`${this.myName},Welcome to website and corse price is ${this.money}`);
    
   }

}
// console.log(person.welcomemsg());
person.myName="sam"
// console.log(person.welcomemsg());

 console.log(this)

//  function redmi(){
//     let username="divy"
//     console.log(this.username) //this will only work inside object
//  }
//  redmi();
