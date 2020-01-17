// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (num) => {
  const isNegative = Math.sign(num) === -1;
  num = num.toString();
  return isNegative ? -parseInt(reverseString(num.slice(1, num.length))) : parseInt(reverseString(num));
};

const reverseString = (str) => str.split('').reverse().join('');

export default reverseInt;
