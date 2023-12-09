/**
 * 12]  Write a function which returns true if given value of
 *    number is an integer without using any inbuilt functions
 */

function Check(Num) {
  if (typeof Num === "number") {
    return true;
  } else {
    return false;
  }
}

console.log(Check(10));
console.log(Check("Shravani"));
