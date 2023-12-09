/**
 * 
 * 
11]  Swap two integers present in variables num1 and num2 without 
    using temporary variable.

    Input: A = 10 & B = 5
    Output: A = 5 & B = 10
 */

function Swap(A, B) {
  A = A + B;
  B = A - B;
  A = A - B;

  console.log("A = " + A + " B = " + B);
}

Swap(10, 5);
