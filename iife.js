//Immediately Invoked Function Expression(IIFE)

//global scope k pollution se dikkat hoti h kaibaar to uss pollution ya jo var h usko hatane k liye iife

//() () ->first for function definition wrapping @nd for execution

(function chai(){
    //name iife(function and it's name)
    console.log(`DB Connected`);
})(); //put semicolon else 2nd iife will not run

( (name) => {
    console.log(`DB2 Connected ${name}`)
})("kkk");