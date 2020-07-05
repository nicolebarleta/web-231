/*
============================================
; Title: Discussion 5.1
; Author: Dan Ross
; Date: 4 July 2020
; Modified By: Marie Nicole Barleta
; Description: Objects with errors
;===========================================
*/



/* My solution
1. Properly declared objects got rid of quotation marks ex: "title" made title:
2. Added closing bracket to declare nested objects from author
3. Called book variable to properly call nested object author.
*/
//This program has 3 errors

//Object
var book = {
  title: "Weaveworld",
  for: "mature audiences",
  ISBN: "0743417356",
  genre: "Gothic Fiction",

	author: {
    firstName: "Clive",
    lastName: "Barker"
  }
};

//output
console.log("One of my favorite books is " + book.title + " by " + book.author.firstName + " " + book.author.lastName + ". " + "It's for " + book.for + " and is a " + book.genre + " novel. " + "Its ISBN is " + book.ISBN + ".");

//Expected output
//One of my favorite books is Weaveworld by Clive Barker. It's for mature audiences and is a gothic fiction novel. Its ISBN is 0743417356.
