/**
4] Problem: Find the largest element in an array.

	Input: [3, 9, 1, 25, 7]
	Output: 25 
  
*/

function largest(arr) {
  let i = 0;
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let arr = [3, 9, 1, 25, 7];
console.log("Largest in given array is " + largest(arr));
