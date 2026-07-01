// LOOPS:

// for(let count=1; count<=7; count++){
//     console.log("PUNJAB COLLEGE");//5 execute
// }

// Calculate sum of 1 to 100:

// let sum =0;
// let n =100;
// for (let i=1; i<=n; i++ ){
//     sum = sum +i;
// }
// console.log("sum" ,sum);

// console.log("loop has ended");

///Print 1 to 5

// for(let i=1; i <=5; i++){

//     console.log("i = " , i );
// }
// console.log(i);

// let i =1;

// while(i<=10){
//     console.log("Zombie Attack");
//     i++;
// }

// let i = 1;

// do {
//   console.log("Goblin");
//   i++;
// }
// while (i<=5);

// for-of loop

// let str ="Javascript";

// for (let i of str) { // iterator -> characters
//     console.log("i= ",i);
// }

// let student = {
//     name : "priyanka",
//     age :"50",
//     cgpa : "4.96",
//     ispass : "true"
// };

// for (let key in student) {

// console.log(i);
// }


// PRACTICE  QUESTIONS:
 
// QS1

// let i= 1;

// for (let num=1;  num<=100;  num++){
//  if (num%2 !== 0) //even number
//  console.log("num =" ,num);
// }

// QS2

//  let gameNum = 25;
 
// let userNum = prompt("Guess the game number:" );
// console.log(userNum);

// while(userNum != gameNum){
//  userNum = prompt("You entered wrong no. Guess again:" );
// }
// console.log("congratulations you entered the right no");


//STRINGS

// let str ="PGC";
// let str2 ="Aneeqa";

// console.log(str2[5]);

// Template Litrals

// let specialString= `This is template literals ${1+ 2 +5} `;

// console.log(specialString);

//  let obj = {
//    item : "pen",
//    price: 10,
//  };

// let output = `the cost of  ${obj.item} is ${obj.price} rupees`;



// // console.log(output)
// let str =("MyRoyalnemesis"); //escape characters

// console.log(str.slice(1));

//JS has immutable strings.

// let str1 = "PerfectCrown";

// console.log(str1.charAt(3));

let fullName = prompt("enter your fullname without spaces");
 
let username= "@" + fullName + fullName.length;
console.log(username);

