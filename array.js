//()-->parenthesis,{}->curly braces ,[]->square bracettes;
//array-Storing collection of different datatype

//js arr->resizable creates shallow copy->same reference point
//deep copy->do not share same reference 

const myArr=[0,1,2,3,4,5];
const myHeros=["Shaktiman","god"];
const arr=new Array(1,2,3,4);
console.log(arr[1]);

//Array methods

myArr.push(6);
myArr.push(7);
console.log(myArr);
myArr.pop();
myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr=myArr.join();//changes to string format , separated
console.log(newArr);
console.log(typeof(newArr))

//slice ,splice

console.log("A ",myArr);
const myn1=myArr.slice(1,3);

console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3);
//manipulates the array and takes the portion of the array
// as specified by the index
console.log("C ",myArr);
console.log(myn2)
