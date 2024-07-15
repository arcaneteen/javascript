//Primitives
//7:- String,Number,Boolean,null,undefined,Symbol(when used in multiple places wrapped in symbol),BigInt

//Dynamically typed lang?

const score=100
const scoreVal=100.3

const isLogged=1;
const boolIsLogged=Boolean(isLogged);

const outsideTemp=null;//return typeof as object
let userEmail;

//Symbols-unique values that can be used as identifiers or keys in objects.
let id=Symbol('123');
let anotherId=Symbol('123');
console.log(id===anotherId);
console.log(typeof anotherId)

const bigNum=8672873672531n
console.log(typeof(bigNum))

//Reference(Non Primitive)
//Array, Objects,Functions

const heros=["sk","pkgp"];//array
//curly braces k andar objects
let myObj={
    name:"khushi",
    age:22
}
//we can store functions in a variable

const myfunc=function(){
    console.log("Hi");
}
console.log(typeof myfunc)//function object

//Stack(primitive),,Heap(Reference)

let myProgress="..working";
let another=myProgress;//you get a copy of the variable
another="true?";
console.log(myProgress);

let user1={
    emailId:"kk@gmail.com",
    url:"@arcane_teen"
}
//heap k andar sbko same hi reference milta h;
let user2=user1;
user2.emailId="k@mail.com";

console.log(user1.emailId);

let name="khushi";
console.log(`Hello my name is ${name} and my repoCount is ${0}`);

