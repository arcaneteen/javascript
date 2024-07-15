//objects and literal way of defining objects

//singleton-one instance created by constructors  - -> Object.create --> elseid created by
//literals -then NOT Singleton

//object literals
//keys & values ka chakkar {}->object
const mySym=Symbol("key1");
const JsUser ={
    name:"khushi",//name by default taken as "name"
    "full name":"kkk",
    [mySym]:"mykey1",
    age:22,
    location:"Asansol",
    email:"k@m.d",
    isLoggedIn:false,
    lastLoginDays:['Monday','Saturday']
}
console.log(JsUser.email);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email="kkj@js.s";
//Object.freeze(JsUser);
JsUser.email="ksj";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("HI!");
}
JsUser.greeting2 = function(){
    console.log(`HI!,${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting2());