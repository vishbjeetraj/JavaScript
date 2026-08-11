const score = 400;
console.log(score);
//  Diff score mai hmane bs num dala hai & balance mai bola hai specialy ye ek number hai
const balance = new Number(40000);
console.log(balance);
console.log(balance.toString()); // toString kiye to ye string mai aa gaya value agar iska typeof (use kar ke bhi dekh sakte hai to string aayega ) dekhe to ye string ban jayega
console.log(balance.toFixed(2)); // tofixed ka use kar ke last mai do decimal vlaue aata hai 100.00

const anotherNum = 12342.9604;
console.log(anotherNum.toPrecision(7)); // precision ka use kar ke hum ek vlaue nikal sakte hai jo ki precized value hoga

const hundred = 1000000000;
console.log(hundred.toLocaleString("en-IN")); // iska use kar ke hm ',' laga sakte hai

//+++++++++++++++++++++++ MATHS +++++++++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4)); // abs se bs - se + mai hota hai
console.log(Math.round(893.9)); //round ka use se bs total kar ke exact value dega
console.log(Math.ceil(4.3)); // ceil ka use kar ke hm 4.3 hai mtb 4 se thoda bhi higher value to bo 5 kar dega
console.log(Math.floor(4.9)); // floor ka use kar ke 4.9 hai to bo lowest vlaue hi lega
console.log(Math.min(1, 2, 6, 4, 7, 0)); //min value
console.log(Math.max(1, 2, 6, 4, 7, 0)); //max value

console.log(Math.random()); // ye Math.random  0/1 ke bich value ddeti hai
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

//trick

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
