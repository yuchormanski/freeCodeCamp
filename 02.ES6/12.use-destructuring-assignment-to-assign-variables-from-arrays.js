/* Use destructuring assignment to swap the values of a and b so that a 
receives the value stored in b, and b receives the value stored in a. */


// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);
// The console will display the values of a, b, and c as 1, 2, 5.

let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a]