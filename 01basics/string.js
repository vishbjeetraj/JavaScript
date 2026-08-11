// Strings Types

const name = "Vishbjeet Raj";
const repoCount = 18;
console.log(`My name is ${name} and My repocount is ${repoCount} `); //String

const gameName = new String("Vishbjeet-raj");
console.log(gameName[2]); //to know what is in second no.
console.log(gameName.__proto__); //

console.log(gameName.length); //length kita bara hai word
console.log(gameName.toUpperCase()); // all words are in captail letter
console.log(gameName.charAt(2)); //2 no pe kya hai uske liye
console.log(gameName.indexOf("t"));  // t konsa index pe hai

const newString = gameName.substring(0, 5);  // index 0 se 4 tak hi jayega 
console.log(newString);

const anotherString = gameName.slice(-7,5)   // reverse hoke
console.log(anotherString);

const newStringOne = '     Vishbjeet    '
console.log(newStringOne);
console.log(newStringOne.trim());        // trim extra spaces 

const url = "https://vishu.com/vishu20%mehta";
console.log(url.replace('20%','='));  // kisi ko repleace karna ho url mai to replace ka use karte hsi


