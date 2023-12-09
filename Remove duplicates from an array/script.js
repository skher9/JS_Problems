/**
 * 7] Problem: Remove duplicates from an array.

	Input: [1, 2, 2, 3, 4, 4, 4, 5]
	Output: [1, 2, 3, 4, 5]
 */

function removeDuplicates(arr) {
  var n = arr.length;

  if (n == 0 || n == 1) {
    return n;
  }

  var temp = new Array(n);

  var j = 0;

  for (var i = 0; i < n - 1; i++) {
    if (arr[i] != arr[i + 1]) temp[j++] = arr[i];
  }

  temp[j++] = arr[n - 1];

  for (var i = 0; i < j; i++) {
    arr[i] = temp[i];
  }

  return j;
}

var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

n = removeDuplicates(arr);

for (var i = 0; i < n; i++) {
  console.log(arr[i] + " ");
}
