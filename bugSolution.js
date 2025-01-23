function foo(a, b) {
  if (a > b) {
    return false; 
  } else if (a === b) {
    return true;
  } else {
    return foo(a + 1, b);
  }
}

console.log(foo(1, 5)); // Output: false
console.log(foo(5, 1)); // Output: false
console.log(foo(5, 5)); // Output: true