let firstName = "Usman";
let lastName = "Lubis";
let age = 23;
let fullName = firstName + " " + lastName;
console.log(fullName);

// escape character
console.log('I\'am Groot'); // I'am Groot
console.log("She said \"yes\""); // She said "yes"
console.log("\\"); // \ (backslash)
console.log("usman \t lubis"); // usman   lubis (have tab)
// you can find more other escape characters

// without literal template
console.log("Hello, my name is " + fullName + ", and I am " + age + " years old.");

// with literal template
console.log(`Hello, my name is ${fullName}, and I am ${age} years old.`);

// index start from 0 (space is count)
console.log(fullName[0]);
console.log(fullName[8]);

// javascript method and properties
// length start from 1
console.log(fullName.length); // 11 (including space)

// toupper and lower case
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

// include
console.log("Mathematics".includes("hema")); // true

// startsWith and endsWith
console.log("Mathematics".startsWith("Math")); // true
console.log("Mathematics".endsWith("ics")); // true

// trim (for cropping space in start and end of stings)
console.log("     usman lubis     ".trim()); // usman lubis

// split make string to array
let names = ("John,Doe,Jane,Budi");
let arrNames = names.split(",");
console.table(arrNames);

// you can find more string method and properties