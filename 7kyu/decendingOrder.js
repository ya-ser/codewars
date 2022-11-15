/* Decending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

function descendingOrder(n){
  // turns number to string so that it can be an array, then split each num into its own index in array, then sort it ascending, then reverse it, join the array to one string, and return it as a number from parseInt
  return parseInt(String(n).split('').sort().reverse().join(''))
}