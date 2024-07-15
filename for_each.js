const coding=["js","rb","py","java"];

coding.forEach(function (val){
    console.log(val);
})

//arrow function
coding.forEach( (ele)=>{
    console.log(ele);
})

//ek func jo v diya gya wo print kre
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);//function ka reference diye usko execute nhi with ()

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)
// })

//array of objects
const myCoding =[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
         languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
       languageFileName:"py"
   }
]

myCoding.forEach( (key)=>{
    console.log(`${key.languageName} :- ${key.languageFileName}`)
})

//forEach returns nothing-undefined



myCoding.filter( (item) =>{
    console.log(item.languageFileName ,":" ,item.languageName);
})