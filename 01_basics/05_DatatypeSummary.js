//primitive

//7 types:string,boolean,number,null,undefined,symbol,bigint

const score=100
const scorevalue=100.3

const IsLoggedIn=false
const outsidetemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol(123)

console.log(id===anotherId);

const bigNumber=46415484159456665n //n is for representing big int

//reference (Non primitive)

//Array,objects,Functions

const heros=["Iron man","Batman","wolverine"] 
let myObj={
    name:"Lokesh",
    age:22,
}

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof bigNumber)

//return type of non primitive datatype is function but return type of funtion is object function


//*************************memory**********************************

//stack(all primitive values will go),heap(all non-primitive)

let myName="Lokesh Singh Parmar"

let anotherName= myName;
anotherName="great lokesh"

console.log(myName)
console.log(anotherName)

let UserOne={
    email:"lokeshprmar@gmail.com",
    upi:"5793478734.ybl"
}
let UserTwo=UserOne
UserTwo.email="lokesh@gmail.com"

console.log(UserOne.email);
console.log(UserTwo.email);


//in heap we get reference(whatever change we will do it will be in original value) but in stack we get copy