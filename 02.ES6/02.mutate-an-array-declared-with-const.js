// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

// v.1
/* const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  let a = s.pop();
  s.unshift(a);
  // Only change code above this line
}
editInPlace(); */

// v.2
const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid
    s.unshift(s.pop());
    console.log(s);
    // Only change code above this line
}
editInPlace();