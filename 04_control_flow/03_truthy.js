const userEmail=[]

if(userEmail){
    console.log("got user email")
}else{
    console.log("don't have user email");
}

//falsy values
//false,0,-0,BigInt 0n,"",null,undefind,Nan

//truthy values
//"0","false"," ",[],{},function(){}


if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

//Nullish coalsescing Operator (??): null undefined

let val1;
// val1=5??10 //will choose the first value in this case and in case of null other vlaue or function will be choose but in case of undefined undefined will be choosen
// val1=null??10
// val1=undefined??15
val1=null??10??20

console.log(val1)


//ternairy operator

//condition ? true statement : falsestatement

const iceTeaPrice=100

iceTeaPrice<=80 ?console.log("price is less than 80"):console.log("price is more than 80")