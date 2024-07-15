const course={
    coursename: "js",
    price: "free",
    courseInstructor:"hitesh sir"
}

//course.courseInstructor

//obj destructurnig
const {courseInstructor:instructor}=course;
console.log(instructor);

//in react destructuring of navbar

const navbar=({company})=>{

}
navbar(company= "hitesh")

//Apna kaam kisi ar p daal dena is API-->now returns in json format before->xml

// {
//     "name":"hitesh",
//     "coursename":"js",
//     "amount":0
// }

//api in array format
// [
//     {},
//     {},
//     {}
// ]