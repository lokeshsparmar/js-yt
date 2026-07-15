//let a=10
const b=20
var c=30

if(true){  //true means we will definately go in the if scope 
    let a=10
    const b=20
    var c=30       //avoid using var bcz value goes outside the scope
}

//console.log(a)
//when we to inspect and check for global variable will be differne t from the global variable of the code environment


function one(){
    const username="lokesh"

    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)  ///it is alredy finished in the upper scope can`t access it here
     //execution is done line by lone
    two()
}
//one()

if(true){
    const username="lokesh"
    if(username==="lokesh"){
        const website ="youtube"
        console.log(username+" "+website)
    }
    //console.log(website) //will give error bcz it is declared outside the scope
    
}
//console.log(username) //out side the scope

// +++++++++++++ intersting++++++++++++

console.log(addone(5))

function addone(num){ //it can be accessed before declaration
    return num+1
}

addone(5)


const addtwo=function(num){ //it is function ans often called as expression & if we r declaring a function like this we can`t access it before the declaration
    return num+2
}

 addtwo(5)
