/*
============================================
; Title:  barleta-assignment-5.4.js
; Author: Professor Krasso
; Date:   28 June 2020
; Modified By: Marie Nicole Barleta
; Description: Filtering complex data structures
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Assignment 5.4"));
console.log("\n")


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



console.log("-- COMPOSER BY RATING --")
let ratings = composer.map((composers) => {
  return "Rating: " +composers.rating +"\n" + "Composer: " +composers.lastName +"\n"
})
    ratings.forEach((rate) => {
    console.log(rate)

})



console.log("-- COMPOSER BY GENRE --")
let genres = composer.map((composers) => {
  return "Genre: "+composers.genre+"\n" + "Composer: "+composers.lastName +"\n"
})
   genres.forEach((genre) => {
   console.log(genre)
 })
