const name="lokesh "
const repoCount=2

console.log(name+repoCount+" value")//outdated

console.log(`my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String("lokesh-tc")
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString=gameName.substring(0,4)//last number is not included
console.log(newString)

const anotherString=gameName.slice(-9,7)
console.log(anotherString)

const newStringOne="   lokesh    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url="https://lokesh.com/singh%20parmar"
console.log(url.replace('%20','-'))
console.log(url.includes('good'))//wrong way to do it
console.log(gameName.split('-'))
