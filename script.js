'use strict';

function first() {
  // Do something
  setTimeout(function () {
    console.log(1);
  }, 1000);
}

function second() {
  console.log(2);
}

// first();
// second();

function learnJavaScript(lang, callback) {
  console.log(`I learn: ${lang}`);
  callback();
}

function done() {
  console.log('I remember this lesson.');
}

learnJavaScript('Java Scrip~t', done);
