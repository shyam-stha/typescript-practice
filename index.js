"use strict";
//type checking in typescript
// let nameOfMe : string = "shyam";
//shows error
// nameOfMe = false;
// console.log(nameOfMe)
//Inference in typescript
// let job = "study";
// let level = 87;
//also throws error
// level = false;
//any and unknown in typescript
// let age : any = 19;
//doesn't throw error
// age = "shyam" + 19;
// age = false;
// let stringAge : string = age;
// console.log(typeof stringAge)
//assigning age to a stringAge of type string it does not become a string, it  is still a boolean. So the replace function does not exits
//throw error
// stringAge.replace("false", "true")
//for above problem typescript has another type i.e. unknown
//type unknown
// let age : unknown = 19;
// age = false;
//throw error that boolean value can't be assigned to string
// let stringAge : string = age;
//Arrays in Typescript
let job = "red mage";
let level = 80;
let isExpansionJob = false;
let jobAbilities = ['chainspell', 'convert'];
jobAbilities.push('composure'); //ok
// jobAbilities.push(2) //throw error
// jobAbilities[0] = false; // throw error
