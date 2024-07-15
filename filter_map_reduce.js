const coding= ["js","rb","py","java"];

const values =coding.forEach( (ele)=>{
    //console.log(ele);
    return ele;
})

console.log(values);//so forEach returns nothing


const myNums= [1,2,3,4,5,6,7,8,9,10]
//filter v callback leta h forEach ki tarah
// const newNums = myNums.filter( (num)=> num > 4)

//explicit -use return cause we have opened scope

// const newNums = myNums.filter( (num)=>{
//     return num>4
// })

//forEach

const newNums =[]

myNums.forEach ((num) => {
    if(num>4){
        newNums.push(num)
    }
})


console.log(newNums);