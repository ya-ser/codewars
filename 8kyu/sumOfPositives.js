/* Sum of Positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
  const sumWithInitial = arr.filter(elm => elm > 0)
  const initial = 0;
  const sum = sumWithInitial.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initial
  );
    return sum;
  };