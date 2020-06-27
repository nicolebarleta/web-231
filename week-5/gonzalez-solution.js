/*
============================================
; Title:  Discussion 5.1
; Author: Juvenal Gonzalez
; Date:   25 June 2020
; Modified By: Marie Nicole Barleta
; Description: Simple Map/keyed collection array that outputs 4 sets
;===========================================
*/

/*
  Expected output:
Chevelle has a V8 450 Big Block
Honda has a V4 Gas Saver
Jeep has a V8 w/ 4x4
Saleen S7 has a 7.0 L V8
*/

// 2 Errors
/*
My Solution:
1. Got rid of 4 in Map(4) declaration, it is supposed to be empty.
2. Added a dot in car set('Jeep') to properly declare the value
*/
var car = new Map();
car.set('Chevelle', 'V8 450 Big Block');
car.set('Honda', 'V4 Gas Saver');
car.set('Jeep', 'V8 w/ 4x4');
car.set('Saleen S7', '7.0 L V8');


for (var [vehicle, engineAndFeature] of car) {
  console.log(vehicle + ' has a ' + engineAndFeature);
}
