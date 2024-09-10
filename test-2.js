// test 2

const str = "aabb";
const strArr = str.split("");
let nonRepeatedChar = "";
let index = -1;

const checkNonRepetedStr = () => {
  for (let i = 0; i < strArr.length; i++) {
    let currChar = strArr[i];
    let isMatchTime = 0;

    for (let j = 0; j < strArr.length; j++) {
      if (!(currChar !== strArr[j])) {
        isMatchTime++;
      }
    }

    if (isMatchTime === 1) {
      index = i;
      break;
    }
  }

  return index;
};
checkNonRepetedStr();

console.log(index);
