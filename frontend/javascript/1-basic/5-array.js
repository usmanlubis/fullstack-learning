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

delete cart[2]; // this will remove data in index 2 but aviod using this because data became undefined and create holes in array

let country = ["japan", "china", "indonesia", "usa", "france", "italy"];

// pop to remove last index of array
country.pop();
console.table(country); 

// push to add to last index
country.push("canada");
console.table(country);

// shift to remove the first index
country.shift();
console.table(country);

// unshift to add to first index
country.unshift("russia");
console.table(country);
// you can insert more than 1 data in push and unshift

// check is the variable is array
console.log(Array.isArray(country)); // true because country is array

// array toString
console.log(country.toString());

// array join
console.log(country.join("-"));

// array concat
let arr1 = ["cat", "dog", "horse"];
let arr2 = ["duck", "chicken", "bird"];

console.table(arr1.concat(arr2)); // you can using more than 1 array to concat by seperating with comma

// array concat with value
console.table(arr1.concat("cow", "pig"));

country = ["japan", "china", "indonesia", "usa", "france", "italy"];

// slice an array into new array
let newArr = country.slice(1, 3);
console.table(newArr);

// splice
country.splice(0, 2, "qatar", "egypt"); // means that we want to index 0, we remove 2 data from index 0 and we add new data and insert from to index 0
console.table(country);

// sort array
console.table(country.sort()); // sorting by alphabet

// reverse array
console.table(country.reverse()); 
// how to sort descending an array
country.sort();
country.reverse();
console.table(country);

// array iteration
// forEach
let names = ["jane", "john", "doe", "dave"];
names.forEach(printName);
function printName(item, index){
  console.log("no " + (index + 1) + " is : " + item);
}

// or
names.forEach(function(item) {
  console.log(item);
})

// for of
for (name of names){
  console.log(name);
}

// map can return array
let numbers = [1, 2, 3, 4, 5];
let multiply = numbers.map(function(e){
  return e * 2;
});
console.log(multiply); // [2, 4, 6, 8, 10]

// filter can return array
numbers = [2, 5, 7, 9, 12, 6, 32];
let filterResult = numbers.filter(function(item){
  return item > 5;
});
console.log(filterResult); // [7, 9, 12, 6, 32]

// find just return first data
let findResult = numbers.find(function(item) {
  return item > 6;
});
console.log(findResult); // 7