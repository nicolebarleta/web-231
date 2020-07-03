/*
============================================
; Title:  barleta-fixErrors.js
; Author: Marie Nicole Barleta
; Date:   02 July 2020
; Modified by:
; Description: Find errors, objects in JavaScript
;===========================================
*/

/*
Expected output:

Employee ID: 152942
Employee name: Nicole
Employee rate: 15
Employee name: Full-time

*/



//find errors
var employees = {

  idNum: 0452556,

    id: {
        name: "Nicole",
        rate: 15,
        type: "Full-time"



}

console.log("Employee ID: " + "employees.idNum")
console.log("Employee name: " + employees.[name])
console.log("Employee rate: " + employees.['id']['rate'])
console.log("Employee name: " + "employees.type")


