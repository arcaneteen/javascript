//object m loop for in

const lang={
    'js':"javascript",
    rb:"Ruby",
    py:"Python"
}

for(const ele in lang){
    console.log(`${ele} is a shortcut for ${lang[ele]}`);
}

const programming =["js","rb","py","java"];

for (const key in programming){
    //console.log(key);//keys print starts from 0;
    console.log(programming[key]);
}