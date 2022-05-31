// // Function is a Block of code

// // Function Declaration 

// // function functionName(){

// // }

// // function sumOfTwoNumber(){
// //     return 22+33;
// // }

// // function call
// // sumOfTwoNumber()

// // Global Scope
// var a = 10;
// var b = 30;

// function sumOfTwoNumber() {
//     return a + b;
// }

// function divisionOfTwoNumbers() {
//     return a / b;
// }

// function greeetings() {
//     console.log("Hello World");
// }

// // console.log(greeetings())
// // console.log(sumOfTwoNumber())
// // console.log(divisionOfTwoNumbers())

// // Function with Parameers

// // var num_1 = Number(prompt("Enter the value of Num 1"));
// // var num_2 = Number(prompt("Enter the value of Num 2"));
// // var sum = 0;
// // sumOfTwoNumber(num_1,num_2);

// // function sumOfTwoNumber(val1,val2) {
// //     sum = val1 + val2;
// //     alert("Sum of two numbers = " + sum)
// // }

// var userName = prompt("Enter the Name to Greet");
// greeetingsMeet(userName)
// function greeetingsMeet(name){
//     console.log("Hello . Good Morning", Naveen);
// }


// Recursion in Javascript
// var count =0;
// function test(){
//     console.log('TEst is printintg', count++)
//    while(count <= 20){
//     test();
//    }
// }

// test();

// Program to count down numbers 1

function countDown(number) {
    console.log(number);
    const newNummber = number - 1;
    //base case
    if (newNummber > 0) {
        countDown(newNummber)
    }
}

countDown(25);





