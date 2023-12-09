/**

6] Problem: Count the number of vowels in a string.

	Input: "javascript"
	Output: 3
 
 */

function vowels(Input) {
  let Arr = Input.split("");
  let cnt = 0;

  Arr.forEach((e) => {
    if (e == "a" || e == "e" || e == "i" || e == "o" || e == "u") {
      cnt++;
    }
  });

  return cnt;
}

console.log(vowels("Shravani"));
