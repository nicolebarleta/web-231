/*
============================================
; Title:  barleta-assignment-6.4.js
; Author: Professor Krasso
; Date:   5 July 2020
; Modified By: Marie Nicole Barleta
; Description: Exception handling
; Demonstrates Nested Object Literals
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Exercise 6.2"));
console.log("\n")

var ticket = {

  id: 105,

  name: "Ticket",

  dateCreated: new Date().toLocaleDateString('en-US'),

  priority: 1,

  person: {

     id: 100,

     firstName: "Bob",

     lastName:  "Jones",

     jobTitle: "Programmer I"

  }

};

console.log("Ticket " + ticket.id + " was created on " + "<"+ticket.dateCreated +">" + " and assigned to employee " + ticket.person.firstName +" "+ticket.person.lastName +" ("+ticket.person.jobTitle+")");
