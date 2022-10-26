"use strict";
//example: 42176 -> 76421
//taking in a positive number. rearrange the digits to get the largest num possible.

// convert number to string.
// convert string to array.
// rearrange the array to a descending order.
// convert array into string.
// convert string into number.


function largestDigit(num) { //example: 42176
  let digits = num.toString().split(""); //"42176" => ["4", "2", "1", "7", "6"]
  digits = digits.sort((a, b) => Number(b) - Number(a)); //[7, 6, 4, 2, 1]
  return Number(digits.join(""));
}

module.exports = largestDigit;