// --- Directions
// Write a program that return fizzbuzz
// according to the number. But for multiples
// of three print “fizz” instead of the number
// and for the multiples of five print “buzz”.
// For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   buzz
//   fizzBuzz(9);
//   fizz
//   fizzBuzz(15);
//   fizzbuzz

const fizzBuzz = (num) => {
  let result;
  if (num % 3 === 0) {
    result = 'fizz';
  }
  if (num % 5 === 0) {
    result = 'buzz';
  }
  if (num % 3 === 0 && num % 5 === 0) {
    result = 'fizzbuzz';
  }
  return result;
};

export default fizzBuzz;
