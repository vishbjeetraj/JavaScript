const bollywoodHeros = [ "Shahrukh Khan", "Salman Khan", "Aamir Khan" ];
const bollywoodHeroines = [ "Deepika Padukone", "Katrina Kaif", "Priyanka Chopra"];

bollywoodHeros.push(bollywoodHeroines); 
 /* Yaha pe push karne se Arr , jo second Arr hai usko bhi aryas data le liya hai or ek saath print kar diya */

console.log(bollywoodHeros);

console.log(bollywoodHeros[3]); 

/*yaha check karne per mujhe index 3 pe bo sara dikhenge mtb ki bo index pe aa gaya hai as a Data of heroines */

console.log(bollywoodHeros[3][2]);

 /*yaha hm check kar rahe hai jo index 3 pe hai uske andaar index 2 pe konsa data hai */

bollywoodHeros.concat(bollywoodHeroines); 
/*Concat karne se bhi bahi milta hai jo push karne se milta hai */

console.log(bollywoodHeros);

/*do array ko ek saath aad karne ke liye ek new variables lena hota hai uske baad hm log data ko ek saath concat kar sakte hai */

const allActors = bollywoodHeros.concat(bollywoodHeroines);
console.log(allActors);

const newallActors = [...bollywoodHeros, ...bollywoodHeroines]  
/*spread aise bhi hm log add kar sakte to arrays ko or return hoke new array mil jayega */
console.log(newallActors);


const someArr = [1,2,3,4,[4,3,2,[3,74,4,[3456,341,[0,3]]]]]
const newsomeArr = someArr.flat(3) 
const newsomeArr = someArr.flat(Infinity) 

/* Actually hmlog yaha pe kar rahe flat ka iska use kar ke bhi hm arrays ko ek sath kar sakte hai or infinity ka use is liye kar rahe hai ke kitna defth chaiye agar hm chaye to no. bhi de sakte hai depth ka but infinity is too is so use */

console.log(newsomeArr);

console.log(Array.isArray("Vishu")); // ya oe isArray weather check kar hai 
console.log(Array.from("Vishu"));// ya pe hm form array bana deta hai
console.log(Array.from({name : "vishu"}));// interesting case ya object ko direct nahi kar sakta hai conert isliye empty value aaye 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));  // of se sara variable of ek saath kar dete hai 


