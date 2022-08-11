// // Data Type in JS:

// let myString = 'I love JavaScript';
// let myNumber = 20;
// let myBoolean = true;

// console.log(myString);
// console.log(myNumber);
// console.log(myBoolean);

// // let vs const :

// let myNumber1 = 20;
// const myNumber2 = 30;
// myNumber1 = 40;
// //myNumber2 = 50;

// console.log(myNumber1);
// console.log(myNumber2);

// // +, -, *, /, % between 2 variables:

// var num1 = 50;
// var num2 = 10;

// var numSum = num1 + num2;
// var numSubtraction = num1 - num2;
// var numMultiplication = num1 * num2;
// var numDivision = num1 / num2;
// var numModulus = num1 % num2;

// console.log(numSum);
// console.log(numSubtraction);
// console.log(numMultiplication);
// console.log(numDivision);
// console.log(numModulus);

// // Uses of <, >, ==, !=, <=, >= signs between 2 variables :

// var num1 = 50;
// var num2 = 10;

// console.log(num1 < num2);
// console.log(num1 > num2);
// console.log(num1 == num2);
// console.log(num1 != num2);
// console.log(num1 <= num2);
// console.log(num1 >= num2);

// // Uses of && and || in JS

// let num1 = 150;
// let num2 = 1113;
// let num3 = 137;

// // if (num1 > num2 && num1 > num3) {
// //     console.log(num1 + ' is the biggest number. ');
// // }
// // else if (num2 > num1 && num2 > num3) {
// //     console.log(num2 + ' is the biggest number.');
// // }
// // else {
// //     console.log(num3 + ' is the biggest number.');
// // }

// // Alternative solution 

// if (num1 > num2) {
//     if (num1 > num3) {
//         console.log(num1);
//     }
//     else {
//         console.log(num3);
//     }
// }
// else {
//     if (num2 > num3) {
//         console.log(num2);
//     }
//     else {
//         console.log(num3);
//     }
// }

// No. 7 : Print the odd numbers between 7 to 19 using while

let i = 7;
while (i <= 19) {
    // if (i % 2 == 0) {
    //     continue;
    // }
    console.log(i);
    i += 2;
}

// // Solution with for loop:
// for (let i = 7; i <= 19; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }
