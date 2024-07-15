const gameName=new String('k-k-keshri');//String hi chahiye

console.log(gameName[7])
console.log(gameName.__proto__);//{}
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('e'));
//slicing the string
const newString=gameName.substring(4);
console.log(newString);

const str1="  lala  ";
console.log(str1);
console.log(str1.trim());
console.log(str1)
const str2=new String("ardiya@,smh.skj8%");
console.log(str2.replace('8%','-'));
console.log(str2.includes('@'));//checks if present
console.log(str2.matchAll('%'));
console.log(gameName.split('-'));
console.log(str1.trimEnd());//removes from trail