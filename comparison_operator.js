//  JavaScript Comparison and Logical Operators

// Equal to Operator
// const a =5;
// const b= 2;
// const c= 'Hello'

// const a=5, b=2, c='Hello';

// console.log(a == 5); // true
// console.log(b == '2'); // true
// console.log(c == 'Hello'); // true

// == evaluates to true if the operands are equal.

// Note: In JavaScript, == is a comparison operator, whereas = is an assignment operator. If you mistakenly use = instead of ==, you might get unwanted result.

//  Not Equal to Operator

// const a = 3, b = 'hello';

// // not equal operator
// console.log(a != 2); // true
// console.log(b != 'Hello'); // true

// != evaluates to true if the operands are not equal.


// Strict Equal to Operator
// const a = 2;

// // strict equal operator
// console.log(a === 2); // true
// console.log(a === '2'); // false

// === evaluates to true if the operands are equal and of the same type. Here 2 and '2' are the same numbers but the data type is different. And === also checks for the data type while comparing.

// The difference between == and === is that:

// == evaluates to true if the operands are equal, however, === evaluates to true only if the operands are equal and of the same type


// Strict Not Equal to Operator

// const a = 2, b = 'hello';

// // strict not equal operator
// console.log(a !== 2); // false
// console.log(a !== '2'); // true
// console.log(b !== 'Hello'); // true

// !== evaluates to true if the operands are strictly not equal. It's the complete opposite of strictly equal ===.

// In the above example, 2 != '2' gives true. It's because their types are different even though they have the same value.

// Greater than Operator
// const a = 3;

// // greater than operator
// console.log(a > 2); // true

// > evaluates to true if the left operand is greater than the right operand.

// Greater than or Equal to Operator >=

// const a = 3;

// greater than or equal operator
// console.log(a >= 3); //true

// >= evaluates to true if the left operand is greater than or equal to the right operand.


// Less than Operator
// const a = 3, b = 2;

// // less than operator
// console.log(a < 2); // false
// console.log(b < 3); // true

// Less than or Equal to Operator
// const a = 2;

// // less than or equal operator
// console.log(a <= 3) // true
// console.log(a <= 2); // true

// Logical AND Operator
const a = true, b = false;
const c = 4;

// logical AND
// console.log(a && a); // true
// console.log(a && b);  // false

// console.log((c > 2) && (c < 2)); // false
// A B  Result
// -----------------
// 0 0  0
// 1 1  1
// 0 1  0
// 1 0  0

// && evaluates to true if both the operands are true, else evaluates to false.

// Logical OR Operator
// const a = true, b = false, c = 4;


// // logical OR
// console.log(a || b); // true
// console.log(b || b); // false
// console.log((c>2) || (c<2)); // true

//  || evaluates to true if either of the operands is true. If both operands are false, the result is false.

// Logical NOT Operator
// const a = true, b = false;

// // logical NOT
// console.log(!a); // false
// console.log(!b); // true




