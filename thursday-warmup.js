'use strict';
// Ramp Numbers
//
// A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//
// **Input**
//
// A positive integer, n.
//
// **Output**
//
// true if the input is a ramp number, false if it is not

function ramp(n) {
  var nString = n.toString();
  var previousNum = nString[0];
  for (var i = 0; i < nString.length; i++) {
    if (previousNum <= nString[i]) {
      previousNum = nString[i]
    } else {
      return false;
    }
  }
  return true
}

console.log('1234', ramp(1234));
console.log('1124', ramp(1124));
console.log('1032', ramp(1032));
console.log('4528', ramp(4528));
