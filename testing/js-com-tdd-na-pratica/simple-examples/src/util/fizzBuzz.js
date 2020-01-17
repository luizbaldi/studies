export default (num) => {
  let result = null;

  if (num % 3 === 0) result = 'Fizz';
  if (num % 5 === 0) result = 'Buzz';
  if (num % 5 === 0 && num % 3 === 0) result = 'FizzBuzz';
  if (!result) result = num;

  return result;
};
