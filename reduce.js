const arr= [1,2,3]

let init_val=2
const summ=arr.reduce( (acc,cur_val) =>{
    console.log(`acc:${acc} and current val:${cur_val}`);
    return acc+cur_val;
},init_val)

console.log(summ-init_val);

const shoppingCart =[
    {
        itemName: "Js course",
        price:2999
    },
    {
        itemName: "React course",
        price:999
    },
    {
        itemName: "DataScience course",
        price:1900
    },
    {
        itemName: ".Net course",
        price:999
    }
]

//add the shopping cart price

const tot_price=shoppingCart.reduce( (acc,curval)=>(acc+curval.price),0);
console.log(tot_price)