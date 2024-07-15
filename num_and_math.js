const score=400;
console.log(typeof(score.toString()))
const balance=new Number(100);
console.log(typeof(balance));
console.log(balance)
console.log(balance.toFixed(2));//two decimal point value

const otherNum=123.8768;
console.log(otherNum.toPrecision(4));//round off taking 4 bits

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++MAths+++++++

console.log(Math.abs(-4));
console.log(Math.round(8.76));
console.log(Math.ceil(4.2));
console.log(Math.floor(8.9));
console.log(Math.sinh(6));
console.log(Math.min(4,8,9,08));
console.log(Math.random());//0-1 range by default

console.log(Math.random()*10+1);//Range:1-10 -->adding 1 to avoid 0 cases or close to 0
console.log(Math.floor(Math.random()*10+1));

const min=10,max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));