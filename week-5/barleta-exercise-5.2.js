/*
============================================
; Title:  barleta-exercise-5.2.js
; Author: Professor Krasso
; Date:   28 June 2020
; Modified By: Marie Nicole Barleta
; Description: ES5 Built-In Functions
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Exercise 5.2"));
console.log("\n")

/*
  Expected output:
  FirstName LastName
  Exercise 5.2
  Today's Date
  Oysters
  Shrimp
  Steak
  Tacos
  Sushi
*/

//start program
var foods = ['Oysters', 'Shrimp', 'Steak', 'Tacos', 'Sushi'];
foods.forEach(function (food){
console.log(food);
})


//end program
