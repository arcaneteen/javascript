//global scope->available to blocks too
var c=300
let a=300

if(true){      //block scope
    let a=10
    const b=20
    var c=30
    console.log(`Inner value of a:${a}`)
    
}
console.log("outer a:", a);
// console.log(b);
console.log(c);//var prints 30

//browser scope and node environment scope different

function one(){
    const username="khushi"

    function two(){  //two can access one's variable as it's inside one
        const website="youtube";//isi scope m khatmk
        console.log(username);
    }
    two()
    //console.log(website); //one cannot access what's two's
}
one();

if(true){
    const username="khushi";
    if(username==="khushi"){
        const study=" yes"
        console.log(username + study);
    }
   // console.log(study);
}
//console.log(username);

//+++++++++++++ interesting ++++++++++++++

console.log(addone(5));
function addone(num){
    return num+1
}

//Hoisting-cannot be used before declaration in this type
console.log(addTwo(4)); 

const addTwo =function(num){  //may be called expression
    return num + 2 ;
}

