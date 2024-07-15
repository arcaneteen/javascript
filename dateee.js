//Date object

let myDate=new Date();
// console.log(typeof myDate)
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());//-->DAy&Date
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());//dd/mm/yyyy
// console.log(myDate.toLocaleString());//that formt with time to

// let myCreatedDate=new Date(2024,5,12,15,29);//month indexing starts from 0
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate=new Date("01-13-2024");//mm/dd/yyyy here month 1-jan
 console.log(myCreatedDate.toLocaleString());

 let myTimeStamp=Date.now();
 console.log(myTimeStamp)//result in milisecond from jan 1 1970
 console.log(myCreatedDate.getTime());
//  let result=myTimeStamp-myCreatedDate.getTime()
//  console.log(`result=${result.toLocaleString()}`)
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    //timezone:
})