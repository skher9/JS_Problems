/**
 * 10] Problem: Find the second smallest number in an array.

	Input: [7, 3, 9, 1, 5]
	Output: 3
 */

function Smallest(arr) {
  let small = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
  }

  return small;
}

let Input = [7, 3, 9, 1, 5];

console.log(Smallest(Input));
