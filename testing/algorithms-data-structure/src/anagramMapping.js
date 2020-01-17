/* Exercise from leetcode: https://leetcode.com/problems/find-anagram-mappings
  Given two lists Aand B, and B is an anagram of A. B is an anagram
  of A means B is made by randomizing the order of the elements in A.
  We want to find an index mapping P, from A to B. A mapping P[i] = j
  means the ith element in A appears in B at index j. These lists
  A and B may contain duplicates. If there are multiple answers, output
  any of them.
*/

const anagram = (arrOne, arrTwo) => {
  const indexes = [];

  arrOne.forEach(arrOneNum => {
    const idx = arrTwo.findIndex(arrTwoNum => arrOneNum === arrTwoNum);
    indexes.push(idx);
  });

  return indexes;
};

export default anagram;
