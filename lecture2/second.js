// console.log("Hello World");

// ARITHMETIC OPERATORS:

// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = " ,b);
// console.log("a + b = " , a + b);
// console.log("a - b = " , a - b);
// console.log("a * b = " , a * b);
// console.log("a / b = " , a / b);
// console.log("a % b = " , a % b);
// console.log("a ** b = " , a ** b);

// UNARY OPERATORS:
 
// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = " ,b);


//  console.log("--a =" , --a);
//  console.log("a = ",a);

// ASSIGNMENT OPERATORS:

// let a = 5;
// let b = 2; 

// a **= 4; // a ** 4 = 1
// console.log("a = " ,a); // 20

// COMPARISON OPERATORS:

// let a = 6;
// let b = 5;

// console.log("6 >= 5", a >= b);
 

// LOGICAL OPERATORS:

// let a = 6;
// let b = 5;

// console.log(" !(6 < 5) = ", !( a === 6) ); 

 
// CONDITIONAL STATEMENT

// EXAMPLE # 1

// let mode = "dark";
// let color;

// if (mode === "dark"){
//     color = "black"
// }
//  else{
//     color = "white";
//  }

// if (mode === "light"){
//     color = "white"
// }
 
// console.log(color);


// if (age >= 18) {
//   console.log("you can vote") ; 
// }

// if (age < 18) {
//   console.log("you cannot vote") ; 

// }

// EXAMPLE # 2

// let age = 16;

// if (age >=18) {
//   console.log("vote");
// } else
//  {
//     console.log("not vote");
//  }

//EXAMPLE # 3

//odd/even

// let 
// num = 15;

//  if (num%2 ===  0) {
//     console.log( num , "is even");
//  } else {
//      console.log( num ,"is odd");
//  }

// EXAMPLE # 4

//  let mode = "dark";
//   let color;

// if (mode === "dark") {
//   color ="black";
// } else if (mode === "blue") {
//   color = "blue";
// }else if (mode == "pink") {
//   color = "pink";
// } else {
//   color ="white";
// }
// console.log(color);

// if (mode === "dark") console.log(mode);

// EXAMPLE # 5


// let age = 16;

//  let result = age >= 18 ? "Adult" :"not Adult";//simpler /compact if-else

// console.log(result);

// PRACTICE QUESTIONS:

// alert("hello!"); //one time pop up

// let name = prompt("Any yeo sayeo!")
// console.log(name);

// let num =prompt("enter a number");

// if (num % 5 === 0) {
//   console.log(num,"number is multiple of 5");
// }
// else {
//   console.log(num,"number is not multiple of 5");

// }
  
// Q#2 //JS PROGRAM:


let score = prompt("enter your score (0-100)");
let grade;

if (score >= 90   && score <=100 ){
   grade = "A";
} else if (score >= 70   && score <= 89 ){
   grade = "B";
}else if (score >= 60   && score <= 69 ){
   grade = "C";
}else if (score >= 50   && score <= 59 ){
   grade = "D";
}else if (score >= 0   && score <= 49 ){
   grade = "F";
}

console.log("according to your score, your grade was : " ,grade);
