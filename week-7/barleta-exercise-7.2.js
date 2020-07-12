/*
============================================
; Title:  barleta-exercise-7.2.js
; Author: Professor Krasso
; Date:   11 July 2020
; Modified By: Marie Nicole Barleta
; Description: Demonstrates constructor objects
;===========================================
*/

// import statement
var header = require('../barleta-header.js');
console.log(header.display("Marie", "Barleta", "Exercise 7.2"));
console.log("\n")



function employee(id, firstName, lastName, title) {

  this.id = id;

  this.firstName = firstName;

  this.lastName = lastName;

  this.title = title;

}

var employees = [

  new employee(1, "Thomas", "Edison","Software Engineer" ),
  new employee(2, "Benjamin", "Franklin","Programmer" ),
  new employee(3, "Nikola", "Tesla","Project Manager" ),
  new employee(4, "Charles", "Babbage","Product Manager" ),
  new employee(5, "Alexander", "Bell","Business Analyst" )

];


function getEmployees(employees){
  for (var k=0; k < employees.length; k++){
  console.log(employees[k].id,employees[k].firstName,employees[k].lastName,employees[k].title)
  }
  }

  getEmployees(employees);
