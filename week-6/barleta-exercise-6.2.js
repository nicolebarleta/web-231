/*
============================================
; Title:  barleta-exercise-6.2.js
; Author: Professor Krasso
; Date:   30 June 2020
; Modified By: Marie Nicole Barleta
; Description: Exception handling
; Demonstrates how to create a try/catch/finally block
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Exercise 6.2"));
console.log("\n")





try {
  // variables
  let x = -1
  let y = -1
  const sum = x + y

  // if statement
  if (sum < 0) throw 'not positive'

  // output
  console.log(sum)
} catch (err) {
  console.log('Catch clause: ' + err)
} finally {
  console.log('Finally clause reached...')
}
