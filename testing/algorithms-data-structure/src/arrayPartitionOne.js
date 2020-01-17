/* Exercise from leetcode: https://leetcode.com/problems/array-partition-i/
  Given an array of 2n integers, your task is to group these integers into n pairs of integer,
  say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i
  from 1 to n as large as possible.
*/

const arrayPartition = nums => {
  let sum = 0;

  const sortedArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i += 2) {
    sum += sortedArr[i];
  }

  return sum;
}

export default arrayPartition;
