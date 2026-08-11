/****************************** Stack & Heap **************************** */
// Stake use in Primitive data types
//Heap use in non Primitive data types

// Stack code 
let myYoutubename = "Mistic Vishu";
let anothername = myYoutubename;
anothername = "Vishu Mehta";
console.log(myYoutubename);
console.log(anothername);

// Heap
let userOne = { 
 email:"vsihu@gmail.com",
 upi : "vishbjeet@ypl"
}

let userTwo = userOne

userTwo.email = "raj12singh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

