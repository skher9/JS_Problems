/**
 * 13] Create a function which returns a random number in the
 * given range of values both inclusive.
 */

function Random(start, end) {
  let Num = 0;

  Num = Math.floor(Math.random() * end) + start;
}

console.log(Random(1, 1000));
console.log(Random(1, 100));
console.log(Random(1, 10));
console.log(Random(1, 5));
