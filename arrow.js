//this -->current context ko btata h
const user={
    username:"khushi",
    roll:25,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome here`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();

console.log(this);//empty obj->{} in node environment but in browser something something

//Browser k andar global object->Window Object

//window.alert() can be run by simple alert()

function chai(){
    let username="any"
    console.log(this);
    console.log(this.username);
}
chai();
//console.log(this.chai);

const chaichai = () => {
    let username="k"
    console.log(this);//returns empty object
}
chaichai();

//Implicit return ->in one line remove curly braces and return statement
const addTwo=(num1,num2)=> ( num1+num2 );

console.log(addTwo(5,2));

//explicit return
const namee=(username)=>{
    return {username:username};
}
console.log(namee("k"));

const myArray =[2,4,67,9];
myArray.forEach((i) => console.log(i));