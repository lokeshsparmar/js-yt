const accountId=33813
let accountEmail="lokeshsparmar@gmail.com"
var accountPassword="1234"
accountCity="delhi"//try not to do this
//we can update everyones value but not of accountId bcz it is declared with const
//never use var bcz of its issue in block scope and functional scope
let accountState;
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);