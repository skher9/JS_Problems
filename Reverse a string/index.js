/**
 3] Problem: Reverse a string.

	Input: "hello"
	Output: "olleh"
 */

let inputString = prompt("Enter the String");

function Reverse(inputString) {
  let Arr = inputString.split("");
  let Reverse = "";
  let len = Arr.length;

  for (let i = len - 1; i >= 0; i--) {
    Reverse = Reverse + Arr[i];
  }
  return Reverse;
}

alert("The Reverse of above string is " + Reverse(inputString));
