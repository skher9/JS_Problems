/*
1] Problem: Write a function to find the sum of all numbers in an array.

	Input: [1, 2, 3, 4, 5]
	Output: 15
*/

let inputString = prompt("Enter elements separated by commas:");
let inputArray = inputString.split(",").map((item) => item.trim());

function Sum(inputArray) {
  let Ans = 0;
  inputArray.forEach((ele) => {
    ele = parseInt(ele);
1010,50
    Ans = Ans + ele;
  });
  return Ans;
}

alert("The Addition of all the numbers is : " + Sum(inputArray));
