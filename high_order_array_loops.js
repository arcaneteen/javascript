// for of loop

["" ,"",""] //array m strings

[{},{},{}] //array m objects

const arr= [ 1,2,3,4,5]

// for(const iterator of object){ //object is like kispe loop lgana h->arr
    
// }

for(const num of arr){
    console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    if(greet===" "){
        continue
    }
    console.log(`Each char is ${greet}`)
}

//Maps-unique val
//map ek obj h jo hold krta h key-value pair & remembers the original insertion order of the key
//js m sb obj h

const map1 =new Map();
map1.set('IN',"India");
map1.set("FR","France");
map1.set('IN',"India");
console.log(map1);

//for of in map
for (const [key,value] of map1){
    console.log(key, ':-' ,value) ;
}

//for of in object

const myObj ={
    game1:'NFS',
    game2:'Spiderman'
}

// for( const [key,value] of myObj){  //not iterable like this
//     console.log(key, "-",value);
// }

//map not iterable when for in used
for (const key in map1) {
    console.log(key);//no output
}