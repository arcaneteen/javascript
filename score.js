/*33=>33
"33abc"=>NaN
true=>1;false=>0

1=>true;0=>false;
""=>false,"k"=>true
;*/

let score="33abc";
console.log(typeof score);
console.log(typeof(score));

var valNum=Number(score);
console.log(typeof(valNum));
console.log(valNum);//not a number

var score2=null;
console.log(typeof score2);
console.log(typeof(score2));

var valNum=Number(score2);
console.log(typeof(valNum));
console.log(valNum);//0

var score2=undefined;
console.log(typeof score2);
console.log(typeof(score2));
var valNum=Number(score2);
console.log(typeof(valNum));
console.log(valNum);//Not a number

var score2=true;
console.log(typeof score2);
console.log(typeof(score2));
var valNum=Number(score2);
console.log(typeof(valNum));
console.log(valNum);//1

/*let isLoggedIn=1;
let boolisLoggedIn=Boolean(isLoggedIn);
console.log(boolisLoggedIn);
*/
let isLoggedIn="k";
let boolisLoggedIn=Boolean(isLoggedIn);
console.log(boolisLoggedIn);

