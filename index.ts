//type checking in typescript
// let nameOfMe : string = "shyam";

//shows error
// nameOfMe = false;

// console.log(nameOfMe)

//Inference in typescript
// let job = "study";
let level = 87;

//also throws error
// level = false;


//any and unknown in typescript
let age : any = 19;

//doesn't throw error
age = "shyam" + 19;

let job : unknown = "study";

job = false;


//throw error
// let booleanJob : boolean = job;


