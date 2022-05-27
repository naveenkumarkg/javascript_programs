// Syntax for If Statement

// if(condition){
//     // the body of If
// }

// The if statement evaluates the condition inside the parenthesis ().

// If the condition is evaluated to true, the code inside the body of if is executed.
// If the condition is evaluated to false, the code inside the body of if is skipped.

// check if the number is positive

// const number = prompt("Enter a number: ");

// // check if number is greater than 0
// if (number > 0) {
//  // the body of the if statement
//   console.log("The number is positive");
// }

// console.log("The if statement is easy");


// JavaScript if...else statement
// An if statement can have an optional else clause. The syntax of the if...else statement is:

// if (condition) {
//     // block of code if condition is true
// } else {
//    // block of code if condition is false
// }

// check if the number is positive or negative/zero

// const number = prompt("Enter a number: ");

// // check if number is greater than 0
// if (number > 0) {
//   console.log("The number is positive");
// }
// // if number is not greater than 0
// else {
//   console.log("The number is either a negative number or 0");
// }

// console.log("The if...else statement is easy");



// JavaScript if...else if statement
// The if...else statement is used to execute a block of code among two alternatives. However, if you need to make a choice between more than two alternatives, if...else if...else can be used.

// The syntax of the if...else if...else statement is:

// if (condition1) {
//     // code block 1
// } else if (condition2){
//     // code block 2
// } else {
//     // code block 3
// }

// If condition1 evaluates to true, the code block 1 is executed.
// If condition1 evaluates to false, then condition2 is evaluated.
// If the condition2 is true, the code block 2 is executed.
// If the condition2 is false, the code block 3 is executed.

// check if the number if positive, negative or zero
// const number = prompt("Enter a number: ");


// // check if number is greater than 0
// if (number > 0) {
//     console.log("The number is positive");
// }
// // check if number is 0
// else if (number == 0) {
//   console.log("The number is 0");
// }
// // if number is neither greater than 0, nor zero
// else {
//     console.log("The number is negative");
// }

// console.log("The if...else if...else statement is easy");



// Nested if...else Statement
// You can also use an if...else statement inside of an if...else statement. This is known as nested if...else statement.

// Example 4: Nested if...else Statement
// check if the number is positive, negative or zero
// const number = prompt("Enter a number: ");

// if (number >= 0) {
//     if (number == 0) {
//         console.log("You entered number 0");
//     } else {
//         console.log("You entered a positive number");
//     }
// } else {
//     console.log("You entered a negative number");
// }

// Body of if...else With Only One Statement

// If the body of if...else has only one statement, we can omit { } in our programs. For example, you can replace

// const number = 2;
// if (number > 0) {
//     console.log("The number is positive.");
// } else {
//    console.log("The number is negative or zero.");
// }

// const number = 2;
// if (number > 0)
//     console.log("The number is positive.");
//  else 
//    console.log("The number is negative or zero.");