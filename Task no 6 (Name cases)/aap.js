"use strict";
// const personName = "aBdullah sHaikh";
// console.log(`Name in Uppercase: ${personName.toUpperCase()}`);
// console.log(`Name in Lowercase : ${personName.toLowerCase()}`);
// for title case :
// let step1 = personName.split(' ');
// let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
// let step3 = step2.join(' ');
// console.log(`Name in title case : ${step3};


// 2nd method :

const personName = "AbdullaH sHaikh";

console.log(`Name in Uppercase : ${personName.toUpperCase()}`);
console.log(`Name in Lowercase : ${personName.toLowerCase()}`);

let titlecaseName = personName.replace(/\b\w/g,c => c.toUpperCase());

console.log(`Name is Titlecase : ${titlecaseName}`);










