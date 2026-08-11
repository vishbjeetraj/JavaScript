let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date (23,4,2); // isme hmne value dal ke date nikala
console.log(myCreatedDate.toDateString())

let myCreatedDate = new Date (23, 4, 2, 8, 20); // isme hmne value dal ke date & time nikala
console.log(myCreatedDate.toLocaleString()) 

let myCreatedDate = new Date ( "03-23-2026");
console.log(myCreatedDate.toLocaleString());

//+++++++++++++++++= Time +++++++++++++++++++

let myTimeStamp = Date.now()  // iska use kar ke hm mile second nikal rahe hai date se 
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000); // is line ka use kar ke second kitna hau hai jan sakte hai 

console.log(Math.floor(Date.now()/1000)); // yaha pe math.floor ka use kar ke hm decimal valu na aaye uske liye use kiye hai

let newDate = new Date()

