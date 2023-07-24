'use strict';
const usdCurr = 28;
const discount = 0.9;

function convert(amoumt, curr) {
  return curr * amoumt;
}
function promotion(result) {
  console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) {
      return;
    }
  }
  console.log('Done');
}

test();

function doNotjing() {}

console.log(doNotjing() === undefined);

function sayHello(name) {
  return `Привет, ${name}!. `;
}
console.log(sayHello('Антон'));

function returnNeighboringNumbers(arr) {
  return new Array(arr - 1, arr, arr + 1);
}
console.log(returnNeighboringNumbers(5));

function getMathResult(base, progression) {
  if (typeof progression !== 'number' || progression <= 0) {
    return base;
  }
  let str = '';
  for (let i = 1; i <= progression; i++) {
    if (i === progression) {
      str += `${base * i}`;
    } else {
      str += `${base * i}---`;
    }
  }
  return str;
}
console.log(getMathResult(4, 6));
