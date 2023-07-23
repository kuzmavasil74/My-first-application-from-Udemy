// 'use strict';

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// function fifthTask() {
//   const arrayOfNumbers = [];
//   for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers.push(i);
//   }
//   console.log(arrayOfNumbers);
//   return arrayOfNumbers;
// }
// fifthTask();

// function firstTask() {
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];
//   arr.forEach((i) => {
//     result.push(i);
//   });
//   console.log(result);
//   return result;
// }
// firstTask();

// function secondTask() {
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   for (i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'number') {
//       data[i] = data[i] * 2;
//     } else if (typeof data[i] === 'string') {
//       data[i] = `${data[i]} + ' - done'`;
//     }
//   }
//   console.log(data);
//   return data;
// }
// secondTask();

// function thirdTask() {
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];
//   data.reverse();
//   data.forEach((e) => {
//     result.push(e);
//   });
//   console.log(result);
//   return result;
// }
// thirdTask();

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += ' ';
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += '*';
//   }
//   result += '\n';
// }

// console.log(result);
