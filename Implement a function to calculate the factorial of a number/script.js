/**
 * 9] Problem: Implement a function to calculate the factorial of a number.

	Input: 5
	Output: 120

 * 
 */

function factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  return fact;
}

console.log(factorial(5));
