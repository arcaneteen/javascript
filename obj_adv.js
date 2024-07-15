//const tinderUser =new Object()-->//Singleton object

//non singleton object-->no internal difference between them
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="khushi"
tinderUser.email="kk@gmail.com"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    //fullname is an object and then we're nesting it with another objects.
    fullname: {
        userfullname: {
            firstname: "khushi",
            lastname: "keshri"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}
const obj4={5:"a",6:"b"}

//const obj3={ obj1 ,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4);//{}->empty object is target else obj1 will become the target
//spread op
const obj3={...obj1,...obj2,...obj4}
console.log(obj3);

//when we get data from database for multiple users
// const users=[
//     {...
//     },
//     {...
//     },
// ]
// users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));//array return type
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//key value pair

//checking id the object exist before using
console.log(tinderUser.hasOwnProperty('isLogged'));

