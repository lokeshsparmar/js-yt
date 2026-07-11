const tinderUser=new Object()   //singleton object
//const tinderUser={}  //non-singleton object

tinderUser.id="123abc",
tinderUser.name="sammy",
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"lokesh",
            middlename:"singh",
            lastyname:"parmar"
        }
    }
}
//console.log(regularUser.fullname.userFullname)//we can further do nesting using the .

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}  //object isode an object
//const obj3=Object.assign({},obj1,obj2) //{}this is given thinking about more object which might come in future

const obj3={...obj1,...obj2}
//console.log(obj3)


//grnerally when users will come they will come in the form of array of object
const users=[
    {
        id:"1",
        email:"l@gmail.com"
    },
       {
        id:"1",
        email:"l@gmail.com"
    },
       {
        id:"1",
        email:"l@gmail.com"
    },
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))  //to grt the keys
console.log(Object.values(tinderUser))  //to get the values
console.log(Object.entries(tinderUser)) //key and valuues are converted into array in array first element will be key and second will ne value

console.log(tinderUser.hasOwnProperty('isLogged'))  //to ask the object wheather that property is there or not

