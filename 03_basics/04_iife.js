//immediately invoked function expression(IIFE)
//sometimes pollution is done due to th global scope ,so in order to remove pollution from it wheather it is its variable or any declaration IFFE is used 

(function chai(){  //name IFFE bcz it has a name
    console.log(`DB CONNECTED`)
})(); //we need to use ; bcz to tell that IFFE funcn is end

//()() //the first paranthesis() is for the dfination of function and scond is for the execution 
 ( (name)=>{
    console.log(`DB IS CONNECTED  TWO ${name}`);
 })('lokesh')