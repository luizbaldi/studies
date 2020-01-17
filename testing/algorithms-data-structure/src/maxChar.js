// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  str = str.toString();
  const mappedStr = _mapStr(str);
  const max = _getMaxCharObj(mappedStr);

  return max.char;
};

const _mapStr = (str) => {
  const mappedStr = {};
  for (let letter of str) {
    if (mappedStr[letter]) {
      mappedStr[letter]++;
    } else {
      mappedStr[letter] = 1;
    }
  }
  return mappedStr;
};

const _getMaxCharObj = (mappedStr) => {
  let max = { char: '', value: 0 };
  for (let [key, value] of Object.entries(mappedStr)) {
    if (value > max.value) {
      max = { char: key, value };
    }
  }
  return max;
};

export default maxChar;
