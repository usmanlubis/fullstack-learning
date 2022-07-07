let x = 10;
let y = 4;

console.log(x + y); // 14
console.log(x - y); // 6
console.log(x * y); // 40
console.log(x / y); // 2.5
console.log(x % y); // 2 (remaining value 10/4)

// increment
console.log(++x); // 11

// decrement
console.log(--y); // 3

// assignment
let a = 10;
let b = 5;

a += b;
console.log(a); // 15 a = a + b

a += 7;
console.log(a); // 22 a = a + 7 | a = 15 + 7
// assignment work for other operator above

// string operator (concatenation)
let firstName = "usman";
let lastName = "Lubis";
let fullName = firstName + " " + lastName;

console.log(fullName);