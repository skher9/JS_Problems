/**
 * 8] Problem: Check if two strings are anagrams of each other.

	Input: "listen", "silent"
	Output: true

 */

function Anagram(Val1, Val2) {
  let Arr1 = Val1.split("");
  let Arr2 = Val2.split("");
  let cnt = 0;

  let len1 = Arr1.lenght;
  let i = 0;

  for (i = 0; i < len1; i++) {
    console.log(Arr1[i]);
  }
}

Anagram("silent", "listen");
