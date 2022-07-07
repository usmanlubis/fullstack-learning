let firstName = "Usman";
let lastName = "Lubis";
let age = 23;
let fullName = firstName + " " + lastName;
console.log(fullName);

// without literal template
console.log("Hello, my name is " + fullName + ", and I am " + age + " years old.");

// with literal template
console.log(`Hello, my name is ${fullName}, and I am ${age} years old.`);

// index start from 0 (space is count)
console.log(fullName[0]);
console.log(fullName[8]);

// length start from 1
console.log(fullName.length); // 11 (including space)
