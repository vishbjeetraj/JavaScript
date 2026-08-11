// Arrays

const myArr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const myHero = ["Bhim", "Karan", "Arjun"]; //Line 3, 4, 5 is type of difine the arrays 
const myArr2 = new Array (1, 2, 3, 4)

// console.log(myArr[5]);

//Array Methods

// myArr.push(9)
// myArr.push(8)         // add element in last
// myArr.pop()           // remove last value

// myArr.unshift(4)     // isse index 0 pe koi bhi element add ho jata hai 
// myArr.shift()        //isse index 0 pe koi bhi element remove ho jayega 1 element


// console.log(myArr.includes(9));  //isme check kar raha hai index 9
// console.log(myArr.indexOf(44));   //isme check karta hai bo no. hai ya nahi code mai 

// const newArr = myArr.join()  // yaha join ka use karne se string mai kar diye 
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); //yaha agar check kare to typeof mai string value ayega 


console.log("A ", myArr);   // As it is array print karne ke liye
const myN1 = myArr.slice(1,3) 
/*Array ke selected elements ko copy karta hai.Original array change nahi hota.Syntax: array.slice(start, end)end index include nahi hota.*/

console.log(myN1);
console.log("B ", myArr); // As it is array print karne ke liye

const myN2 = myArr.splice(1,3) 
/*Array me elements add, remove ya replace kar sakta hai.Original array change hota hai.Syntax: array.splice(start, deleteCount)*/

console.log("C ", myArr); // ya pe change ho gaya hai original array mai
console.log(myN2);



