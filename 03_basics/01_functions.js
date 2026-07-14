function sayMyName(){
console.log("l")
console.log("o")
console.log("k")
console.log("s")
console.log("e")
console.log("h")
}

//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

//addTwoNumbers(3,4)

function addTwoNumbers(number1,number2){

    // let result=number1+number2
    // return result
    return number1+number2
}


function loginUserMessage(username=sam){//if we don`t want undefined
    if(username===undefined){     //!username is similar to the condition in if
        console.log("please ener username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage())//if we pass an empty string we will get just logged in wheras in case of nothing passed we will get undefined logged in


function calculateCartPrice(...num1){  //... means to pack or club all data together
    return num1
}

//console.log(calculateCartPrice(220,310,500))

const user={
    username:"lokesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,500,1000]))