/*
============================================
; Title:  barleta-exercise-5.3.js
; Author: Professor Krasso
; Date:   28 June 2020
; Modified By: Marie Nicole Barleta
; Description: Find errors advanced arrays
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Exercise 5.3"));
console.log("\n")

/*
  Expected output:
  FirstName LastName
  Exercise 5.3
  Today's Date
  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

var composer =[
  {
    firstName: 'Ludwig Van',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: 8,
  },

  {
    firstName: 'Wolgang Amadeus',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: 10,
  },

  {
    firstName: 'Johann Sebastion',
    lastName: 'Bach',
    genre: 'Classical',
    rating: 9,
  },

  {
    firstName: 'Joseph',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: 6,
  },

  {
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: 5,
  },
]

composer.forEach(function(composer){
console.log(
"Last Name: " + composer.lastName + ", Genre: " +composer.genre+ ", Rating: " +composer.rating
);
})
