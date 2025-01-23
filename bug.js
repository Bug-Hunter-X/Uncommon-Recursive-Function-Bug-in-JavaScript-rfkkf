function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else {
    return foo(a + 1, b);
  }
}

console.log(foo(1, 5)); //this will return true unexpectedly
console.log(foo(5,1)); //this will return false as expected
console.log(foo(5,5));//this will return true as expected