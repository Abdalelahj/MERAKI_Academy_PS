/* findPrime */
/*
find all prime numbers less than or equal to n.
you should have one console log when you run the test file*/

const findPrime = (n) => {
  // your code here
  const selected = [];

  for (let i = 2; i <= n; i++) {
    let check = true;
    for (let y = 2; y * y <= i; y++) {
      if (i % y == 0) {
        check = false;
        break;
      }
    }
    check && selected.push(i);
  }
  return selected.forEach((element) => {
    console.log(element);
  });
};

module.exports = { findPrime };

// findPrime(7)