'use strict';
function getTimeFromMinutes(totalMinute) {
  if (
    typeof totalMinute !== 'number' ||
    totalMinute < 0 ||
    !Number.isInteger(totalMinute)
  ) {
    return console.log('Ошибка, проверьте данные');
  } else {
    let hour = 0,
      minute = 0;
    hour = Math.floor(totalMinute / 60);
    minute = totalMinute % 60;
    let hours = 0;
    switch (hour) {
      case 1:
        hours = 'час';
        break;
      case 2:
      case 3:
      case 4:
        hours = 'часа';
        break;
      default:
        hours = 'часов';
    }
    return console.log(`Это ${hour} ${hours} и ${minute} минут`);
  }
}
// getTimeFromMinutes(150);

function findMaxNumber(a, b, c, d) {
  if (
    (typeof a !== 'number',
    typeof b !== 'number',
    typeof c !== 'number',
    typeof d !== 'number')
  ) {
    return console.log(0);
  }
  return console.log(Math.max(a, b, c, d));
}
// findMaxNumber(1, 5, '6', '10');

function fib(num) {
  if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
    return '';
  }

  let result = '';
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      result += `${first}`;
    } else {
      result += `${first} `;
    }

    let third = first + second;
    first = second;
    second = third;
  }
  return result;
}

fib(5);
