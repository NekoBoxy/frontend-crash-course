// practice - array
// Declare a array called fruits with some fruits in default.
// let fruits = ['apple', 'lemon', 'orange'];

// Print every element in the fruits array declared above.
// console.log(fruits); // [ 'apple', 'lemon', 'orange' ]

// Modify the thirth fruit to Durian and print the fruits array.
// 切的位置從 0 開始計算，下面是從 index 2 開始切 1 個
// fruits.splice(2, 1);
// fruits.push('Durian');
// console.log(fruits); // [ 'apple', 'lemon', 'Durian' ]

// Using push method to add two fruits into array.
// fruits.push('kiwi', 'banana');
// console.log(fruits); // [ 'apple', 'lemon', 'Durian', 'kiwi', 'banana' ]

// Remove the first fruit from the array.
// fruits.splice(0, 1);
// console.log(fruits); // [ 'lemon', 'Durian', 'kiwi', 'banana' ]

// Using for, while loop to print the element in the fruits array.
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }; // lemon, Durian, kiwi, banana

// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }; // lemon, Durian, kiwi, banana

// Declare a array called numbers and set each element to its squared using map.
// let numbers = [1, 2, 3, 4, 5];
// let newArr = numbers.map(function (value) {
//   return value ** 2;
// }); // [ 1, 4, 9, 16, 25 ]
// 箭頭函式(簡寫)
// let newArr = numbers.map(value => value ** 2);
// console.log(newArr); // [ 1, 4, 9, 16, 25 ]

// 待修正為 找質數
// Declare a array called numbers and filter the prime number using filter.
// let numbers = [1, 2, 3, 4, 5];
// let newArr = numbers.filter(function (_, index) {
//   return index != 0;
// });
// 箭頭函式(簡寫)
// let newArr = numbers.filter((_, index) => index != 0);
// console.log(newArr); // [ 2, 3, 4, 5 ]

// Declare a array called numbers and computed the sum of the elements using reduce.
let numbers = [1, 2, 3, 4, 5];
let totalNumbers = numbers.reduce((total, value) => {
  console.log('total', total); // 0, 1, 3, 6, 10
  console.log('value', value); // 1, 2, 3, 4, 5
  return total + value;
}, 0); // 給起始值 0

console.log(totalNumbers); // 15
