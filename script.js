'use strict';

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// } while (num <= 55);
// let num = 50;

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

let result = '';
const length = 7;

for (let i = 0; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);
