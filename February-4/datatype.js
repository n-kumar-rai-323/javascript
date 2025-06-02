// 1.Creating Arrays
let fruits = ['apple','banana','cherry'];
let mixedArray = ['work', 1, true]
let emptyArray = []

// Array Constructor:
let colors = new Array ('red', 'green', 'blue')
let numbers = new Array(1,2,3,4,5,6)


// 2.Accessing Elements 
// Arrays are zero-indexed, meaning the first element is at index 0.
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[fruits.length - 1]); // Accessing the last element
// Array Destructuring (ES6+):
let [firstFruit, secondFruit, ...restOfFruits] = fruits;
console.log(firstFruit); // Output: 'apple'
console.log(secondFruit); // Output: 'banana'
console.log(restOfFruits); // Output: ['cherry']


// 3. Modifying Elements
// Direct Assignment:
let dailyActivities = ['eat', 'work', 'sleep'];
dailyActivities[1] = 'exercise'; // Changes 'work' to 'exercise'
console.log(dailyActivities); // Output: ['eat', 'exercise', 'sleep']

// 4. Adding Elements
// push(): Add to the end. Modifies the original array.