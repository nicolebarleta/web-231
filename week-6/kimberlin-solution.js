/*
 	============================================
 	; Author: Rhiannon Kimberlin
 	; Date: 5 July 2020
 	; Modified By: Marie Nicole Barleta
 	; Description: Find errors OBJECTS & BUILT IN OBJECTS
 	;===========================================


  /*
  My solution:

  1. Added parentheses to declare team message
  2. Got rid of brackets on greatJob and needsImprovement.
  3. Added colon to properly declare objects.
  4. Got rid of parentheses on declared objects.

  */


	 //Expected Output
	 /*Great job achieving benchmark results! That was possible through your commitment to excellence! Lets have another great month!

	We didnt do as well as we were expecting. What input can you put in about why we did not achieve our goal so we can do better next month?*/

  let teamMessage = ('Great job achieving benchmark results! That was possible through your commitment to excellence! Lets have another great month!');

  let team = {
    greatJob:
      console.log(teamMessage),
    needsImprovement:
      console.log('We didnt do as well as we were expecting. What input can you put in about why we did not achieve our goal so we can do better next month?')

  };

  team.greatJob();
  console.log("")
  team.needsImprovement();
