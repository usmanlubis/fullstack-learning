// in array we can store multiple data with different data types
let cart = ["egg", "sugar", "oil", "milk", "rice"];
console.table(cart);

console.log(cart.length); // 5
console.log(cart[0]); // egg

// change array value by index
cart[1] = "flour";
console.log(cart[1]); // flour

console.log(cart.indexOf("milk")); // 3
console.log(cart.indexOf("cheese")); // -1 because cart not contain cheese