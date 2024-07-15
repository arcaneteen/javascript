const emailId=[]
if(emailId){
    console.log("got the email");
}
else{
    console.log("Not found the email");
}
//falsy values
//false,0,-0, BigInt 0n,"",null,undefined,NaN

//Truthy values
// "0" , 'false' (String k andar h)," ",[],{}->Object ,function(){}

if (emailId.length===0){
    console.log("Array is empty");
}

const emptyObj ={
   // name:"kk"
}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1= null ?? 10; //safety check
val1=undefined ?? 15
val1 =null ?? 10 ?? 20 ;//jo v first val ho except null undefined assign it

console.log(val1);

//Terniary Operator

//condition ? true : false

const iceTeaPrice =100;
iceTeaPrice >=80 ? console.log("Yes greater than 80") : console.log("LEss than 80");