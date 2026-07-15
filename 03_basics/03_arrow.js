const user ={
    username:"lokesh",
    price:999,

        welcomeMessage:function(){
             console.log(`${this.username},welcome to website`)  //this talks about the current contex or variable
             console.log(this); 
            }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username="lokesh"        //we cant use this like it in a function
//     console.log(this)
// }

//chai()

// const chai=function(){
//     let username="lokesh"
// console.log(this.username)
// }

const chai=()=>{
    let username="lokesh"
    console.log(this);
}


// const addtwo=(num1,num2)=>{      //arrow function,it can be stored inside a variable
//     return num1+num2
// }

const adddtwo =(num1,num2)=>num1,num2
const addtwo=(num1,num2)=>(num1+num2)   //implicit return
console.log(addtwo(3,55))

const myArray(andTwo)