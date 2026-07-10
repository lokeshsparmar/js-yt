//singleton :one of its kind object
//when ever we declare object as literals sinngleton is not formed but in case of construuctor it is formed
//object.create //it is a way to create object using constructor

//object literals
const mySym=Symbol ("key1")//take a symbol and print it as a key of thhe object

const JsUser={             //object is formed
    name:"lokesh",  //name is processed as string
    age:22,
    "FullName":"Lokesh singh parmar",
    [mySym]:"myKey1",
    location:"vidisha",
    email:"lokeshsparmar@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturnday"]
}

console.log(JsUser.email)//it is a way to acess the object//no need to take access as strig we r using . function//always try to use this
console.log(JsUser["email"])  //special cases
console.log(JsUser["FullName"])
console.log(JsUser["mySym"])


JsUser.email="lokesh50@xxxxxx"
//Object.freeze(JsUser)
JsUser.email="lokesh@yyyyyyy"
console.log(JsUser)

JsUser.greetings=function(){
    console.log("hello JS user");
}
JsUser.greetingstwo=function(){
    console.log(`hello JS user,${this.name}`);//string interpolation
}

console.log(JsUser.greetings())//funcn is not executed only got the refference 
console.log(JsUser.greetingstwo())