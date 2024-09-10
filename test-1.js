// test 1
const str = "abcde";
const strArr = str.split("");
let repeatedChar = "";

const checkRepetedStr = () => {
  for (let i = 0; i < strArr.length; i++) {
    let currChar = strArr[i];
    let isMatchTime = 0;
    for (let j = 0; j < strArr.length; j++) {
      if (currChar === strArr[j]) {
        isMatchTime++;
        if (isMatchTime > 1) {
          repeatedChar = strArr[j];
        }
      }
    }
    if (isMatchTime > 2) {
      break;
    }
  }

  if (!repeatedChar) repeatedChar = -1;
  return repeatedChar;
};
checkRepetedStr();

console.log(repeatedChar);
