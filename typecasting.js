// Two types of typecasting

// Implicit Conversion - automatically it will understand how to convert
let result;
// Implicit Conversion to String
// numeric string used with + gives string type
result = '3' + 2;
result = '3' + true;
result = false + 3;
result = 2 + '2'; // concatination
result = 2 + null;
result = 2 + undefined; // Not a Number
// console.log(typeof result);
// When a number is added to a string, JavaScript converts the number to a string before concatenation.




// numeric string used with - , / , * results number type
// Implicit Conversion to Number
result = '4' - '2';
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2

// Non-numeric String Results to NaN
// non-numeric string used with - , / , * results to NaN

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN

// Implicit Boolean Conversion to Number
result = '4' - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

// JavaScript considers 0 as false and all non-zero number as true.
//  And, if true is converted to a number, the result is always 1.


// null Conversion to Number
// null is 0 when used with number

result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4


// undefined used with number, boolean or null

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN




// Explicit Conversion

// You can also convert one data type to another as per your needs. 
// The type conversion that you do manually is known as explicit type conversion.


// Convert to Number Explicitly
// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

result = Number("22");
console.log( typeof result)


// In JavaScript, empty strings and
//  null values return 0. For example,
result = Number(null);
console.log(result);  // 0

 result = Number(' ')
console.log(result);  // 0

// If a string is an invalid number, the result will be NaN. For example,
// '99' '10' '1000000000000000' 'naveen44444'

// 'naveen44444' + 4 = NaN

result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN

// You can also generate numbers from strings using parseInt(), 
// parseFloat(), unary operator + and Math.floor(). For example,


result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20


// Convert to String Explicitly

//number to string


//To convert other data types to strings, you can use either String() or toString(). For example,
result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

// String() takes null and undefined and converts them to string. 
//  However, toString() gives error when null are passed. 



// result = null.toString();

result = String(undefined);
console.log(result); // "undefined"



result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"



// Convert to Boolean Explicitly
// To convert other data types to a boolean, you can use Boolean().

// In JavaScript, undefined, null, 0, NaN, '' converts to false. For example,


result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

// All other values give true. For example,

result = Boolean("Naveen");
console.log(result); // true

result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true



