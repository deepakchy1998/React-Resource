// Filter function
// const nums = [20, 34, 55, 67, 22];
// const newNums = nums.filter((item) => item % 2 == 0);
// console.log(newNums);

// Map function
// const fruits = ["mango", "banana", "pineapple"];
// const uppercase_fruits = fruits.map((fruit) => fruit.toUpperCase());
// console.log(uppercase_fruits);

// Reducer function
// const nums = [20, 34, 55, 67, 22];
// const sum = nums.reduce((acc, curr) => acc + curr);
// console.log(sum);

// Map function
// const nums = [20, 34, 55, 67, 22];
// const newNums = nums.map((item) => item * 2);
// console.log(newNums);

// Array of objects
// const users = [
// 	{ name: "Bike", price: 10000 },
// 	{ name: "TV", price: 5000 },
// 	{ name: "Phone", price: 20000 },
// ];

// const newUsers = users.map((user) => user.name + ":" + user.price);
// console.log(newUsers);

// const newUsers = users.map((user) => user.name);
// console.log(newUsers);

// users.forEach((user) => {
// 	console.log(`${user.name}:${user.price}`);
// });

// Question :-

// Use of toFixed function
// const row_prices = [22.4555, 77.899, 34.666];
// const row_prices_new = row_prices.map((item) => `Rs ${item.toFixed(2)}`);
// console.log(row_prices_new);

//Use of Find function
// const users = [
// 	{ name: "Bike", price: 10000 },
// 	{ name: "TV", price: 5000 },
// 	{ name: "Phone", price: 20000 },
// 	{ name: "bag", price: 5000 },
// 	{ name: "car", price: 2000000 },
// ];

// const Name = users.find((user) => user.price == 5000);
// console.log(Name.name);



// Use of Every function

/*

The every() method checks if all elements in an array satisfy a given condition. It returns true only if every element passes the test; otherwise, it returns false.

*/

// const nums = [20, 34, 55, 67, 22];
// const newNums = nums.every((item) => item > 35);
// console.log(newNums);


// Use of Sort function
// const nums = [20, 34, 55, 67, 22];
// const newNums = nums.sort((a, b) => a - b);
// console.log(newNums);


// // Use of Some function

/*

The some() method checks if at least one element in an array satisfies a given condition. It returns true if any element passes the test and false otherwise.

*/

const nums = [20, 34, 55, 67, 22];
const newNums = nums.some((item) => item > 35);
console.log(newNums);
