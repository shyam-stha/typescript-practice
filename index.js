"use strict";
//type checking in typescript
// let nameOfMe : string = "shyam";
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
