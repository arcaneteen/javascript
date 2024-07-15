const arrNum=[1,2,3];
const greet=['gm','ga','gn']
// arrNum.push(greet);
// console.log(arrNum);//array in an array
// console.log(arrNum[3][2]);

const newArr=arrNum.concat(greet); //concat combines both arr and store it to new
console.log(newArr);

//with spread operator
const combine=[...arrNum,...greet]

console.log(combine)

const another_Array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_Array.flat(Infinity);//infinity-depth
console.log(real_another_array)

//checking if array

console.log(Array.isArray("khushi"));
console.log(Array.isArray(arrNum));

//Creates array
console.log(Array.from("khushi"));
//interesting case
console.log(Array.from({name:"khushi"}));//not able to create arr so returns empty array

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
//returns a new array of set of elements