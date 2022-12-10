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
// let job = "red mage";
// let level = 80;
// let isExpansionJob = false;
// let jobAbilities = ['chainspell', 'convert']

// jobAbilities.push('composure'); //ok
// jobAbilities.push(2) //throw error
// jobAbilities[0] = false; // throw error


// let job = "Red Mage";
// let level = 75;
// let isExpansionJob = false;
// let jobAbilities = ['Chainspell', 'Convert'];
// let swordSkill = ["B", 5, 144, 398]; 

// swordSkill.push("B+"); // OK
// swordSkill.push(230); // OK

// swordSkill[1] = "C"; 
// OK, the type is not position related

// swordSkill.push(true); // Error

// As in the previous example, type inference is done in the declaration. We now declare an array of strings and numbers for swordSkill.

// If you want to explicitly declare the types for the arrays we saw above:
// let jobAbilities: string[] = ['Chainspell', 'Convert'];
// let swordSkill: (string | number | boolean)[] = ["B", 5, 144, 398, true];


// Objects in Typescipt
// let job = {
//     name :  "Summoner",
//     level: 75,
//     isExpansion: true,
//     jobAbilities: ["Astral Flow", "Elemental Siphon"]
//   };
  
//   job.name = "Blue Mage"; // OK
//   job.level = "Four" // Error
//   job.avatars = ["Carbuncle"]; // Error



//checking explicit type of object, but its bit bigger for a simple object
// let job: {
//     name: string;
//     level: number;
//     isExpansion: boolean;
//     jobAbilities: string[];
//   } = {
//     name: "Summoner",
//     level: 75,
//     isExpansion: true,
//     jobAbilities: ["Astral Flow", "Elemental Siphon"]
//   };

// in this case typescript provides type aliases

// type Job = {
//     name: string;
//     level: number;
//     isExpansion: boolean;
//     jobAbilities: string[];
//   };
  
//   let Summoner: Job = {
//     name: "Summoner",
//     level: 75,
//     isExpansion: true,
//     jobAbilities: ["Astral Flow", "Elemental Siphon"]
//   };

//funcations in typescript
type Enemy = {
    name : string,
    hp : number,
    level : number,
    exp : number
};



// let attack = (target : Enemy)  =>{
//     console.log(`Attacking to ${target.name}`)
// }

// attack = "Hello Enemy";


// let attack = (target: Enemy) => {
//     return target.hp - 2;
//   };
  
//   attack = (target: Enemy) => {
//     console.log(`Attacking to ${target.name}`);
//   }; // Error
  
//   let attackResult = attack(lizard)

//Typescript Enums

// Enums are auto-indexed by default – both statements in the example above are equivalent.
// enum BattleMenu {
//     ATTACK,
//     MAGIC,
//     ABILITIES,
//     ITEMS,
//     DISENGAGE
//   }
  
//   enum Equipment {
//     WEAPON = 0,
//     HEAD = 1,
//     BODY = 2,
//     HANDS = 3,
//     LEGS = 4
//   }
  
//   console.log(BattleMenu.MAGIC, Equipment.HEAD); 

//Typescript Generics
// const getPartyLeader = <T>(memberList: T[]) => {
//     return memberList[0];
//   };
  
//   const partyLeader = getPartyLeader(partyA); // Player


//Tuples in typescript
// type Weapon = {
//     name: string;
//     damage: number;
//   };
  
//   type Shield = {
//     name: string;
//     def: number;
//   };
  
//   const sword: Weapon = {
//     name: "Onion Sword",
//     damage: 10
//   };
  
//   const shield: Shield = {
//     name: "Rusty Shield",
//     def: 5
//   };
  
//   let equipment: [Weapon, Shield, boolean];
  
//   equipment = [sword, shield, true]; // OK
//   equipment[2] = false; // OK
  
//   equipment = [shield, sword, false]; // Error
//   equipment[1] = true; //Error

//Classes in Typescript
// class Job {
//     public name: string;
//     private level: number;
//     readonly isExpansion: boolean;
  
//     constructor(name: string, level: number, isExpansion: boolean) {
//       this.name = name;
//       this.level = level;
//       this.isExpansion = isExpansion;
//     }
//   }
  
//   const whiteMage = new Job("White Mage", 75, false);
  
//   console.log(whiteMage.name); // "White Mage"
//   console.log(whiteMage.level); // Error
//   console.log(whiteMage.isExpansion); // false
  
//   whiteMage.name = "Blue Mage"; // Ok
//   whiteMage.level = 50; // Error
//   whiteMage.isExpansion = true; // Error