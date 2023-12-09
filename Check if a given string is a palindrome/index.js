/**
5] Problem: Check if a given string is a palindrome.

	Input: "racecar"
	Output: true 
  
*/

function Reverse(inputString) {
  let Arr = inputString.split("");
  let Reverse = "";
  let len = Arr.length;

  for (let i = len - 1; i >= 0; i--) {
    Reverse = Reverse + Arr[i];
  }

  return Reverse;
}

function palindrome(Input) {
  let reverse = Reverse(Input);

  if (reverse == Input) {
    console.log("The String is Palindrome");
  } else {
    console.log("The String is not Palindrome");
  }
}

palindrome("racecar");
palindrome("Shravani")
