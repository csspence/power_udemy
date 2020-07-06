/*
JavaScript Algorithms and Data Structures Masterclass

Power
Write a function called power which accepts a base and an exponent.  The function should return the power of the base to the exponent.  The function should mimic the functionality of Math.pow() - do not worry aout negative bases and exponents.
*/

const power = (base, expo) => {
  let counter = expo;
  let total = base;
  const innerFunc = () => {
    total *= base;
    counter--;
    if(counter > 1) {
      return innerFunc();
    }
  }
  if(expo === 0) {
    return 1;
  }
  if(counter > 1) {
    innerFunc();
  }
  return total;
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16