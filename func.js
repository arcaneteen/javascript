//functions and memory management

function sayMyName(){  //-->function definition
    console.log("K");
    console.log("h");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("i");
}

sayMyName();//reference

function addTwoNum(num1,num2)//in function def-->parameters-->formal parameters
{
    console.log(num1 + num2);
}
addTwoNum(null,"a");//actual parameters->arguments
const result=addTwoNum(3,7);
console.log(result)//undefined cause function isn't returning anything
//as we have redefined the function so returns 10

function addTwoNum(num1,num2)//in function def-->parameters-->formal parameters
{
    return num1+num2;
    //code written after return will be unreachable code
}

function loginUserName(username='sam'){ //by default passing a name which will be overridden 
    if(/*username=== undefined*/ !username){
        console.log("Please enter your name");
        return
    }
    return `${username} just logged in` 
    
}

console.log(loginUserName("kkk"));//value not passes so undefined

//shopping cart-no idea about how many item are gonna added

function calculate_cart_price(val1,val2,...num1){ //...->rest op as well as spread,depends on the usage
    return num1
}
console.log(calculate_cart_price(200,400,600,2000));//returns the list of items->array
//returns [ 600,2000 ] which is in aaray and rest 2 goes in val1 ,val2

const user ={
    name:"hitesh sir",
    courses:"js"
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.name} and course taught is ${anyobj.course}`)
}

//console.log(handleObject(user));//undefined cause function doesn't return anything
// handleObject(user);

//jaruri nhi object bna k pass krna
handleObject({
    username:"khushi",
    price:499
})

//array passing in func

const myArr=[100,200,300]

function arr_pass(getarr){
    return getarr[1];
}
console.log(arr_pass([670,6,0]));