'use strict';
let stavka = +prompt(`Яка ставка?`);
let godyny = +prompt(`Скільки годин?`);
let vodijski = +prompt(`На скільки наїздив?`);
let pryplatek = +prompt(`Скільки премії?`);

function zp(stavka, godyny, vodijski, pryplatek) {
  const result = stavka * godyny + vodijski + pryplatek * 0.8;
  return result;
}
const salary = zp(stavka, godyny, vodijski, pryplatek);
+alert(`Твоя зарплата ${salary} kč`);
