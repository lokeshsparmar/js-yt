//singleton :one of its kind object
//when ever we declare object as literals sinngleton is not formed but in case of construuctor it is formed
//object.create //it is a way to create object using constructor

//object literals
const JsUser={             //object is formed
    name:"lokesh",  //name is processed as string
    age:22,
    "FullName":"Lokesh singh parmar",
    location:"vidisha",
    email:"lokeshsparmar@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturnday"]
}
console.log(JsUser.email)//it is a way to acess the object//no need to take access as strig we r using . function
console.log(JsUser["email"])
console.log(JsUser["FullName"])
