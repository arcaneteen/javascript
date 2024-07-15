//for loop
const array=[82,8,2,1];

for (let i = 0; i < array.length; i++) {//block scope
    const element = array[i]; 
    if(element==2){
        console.log("2 is best num");
    }
    console.log(element);
}
//console.log(element);

// for(let i=1;i<=10;i++){
//     console.log(`inner loop value:${i}`);
//     for(let j=1;j<=10;j++){
//         let val=i*j;
//         console.log(`${i} * ${j} =${val}`)
//     }
// }

let myArr = ["flash" , "batman" ,"superman"]
console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}

//break and continue

for (let index = 1; index <=20; index++) {
    if(index==5){
        continue
    }
    if(index==8){
        console.log("8 detected");
        break
    }
    console.log(`value of i is ${index}` )
}