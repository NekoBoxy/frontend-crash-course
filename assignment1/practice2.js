// practice of if...else
// 2-1 Declare a variable called age and show ‘can vote’ if age >= 18, show ‘can’t vote’ if age < 18

// let age = 0;
// age = "AAA";

// if (age >= 18) {
//   console.log("can vote");
// } else if (age < 18) {
//   console.log("can't vote");
// } else {
//   console.log("輸入格式應為純數值");
// }

// 2-2 Check if a number is odd or even.

// 若輸入值為Number -> 進入奇偶數迴圈
// 若輸入值為string -> console.log("輸入格式應為純數值")
// 若輸入值不是Number也不是string -> console.log("輸入格式應為純數值")
// let x = 0;
// x = 49;
// if (typeof x === "number") {
//   if (x % 2 == 0) {
//     console.log("even,偶數");
//   } else {
//     console.log("odd,奇數");
//   }
// } else {
//   console.log("輸入格式應為純數值")
// }

// 2-3 Declare two variables and check which one is big or they’re equaled.

// 若兩值相等 -> console.log("they are equaled");
// 若a>b -> console.log("a > b")
// 若a<b -> console.log("a < b")

// let a = 30; b = 9;
// a = 15;
// b = 15
// if (a == b) {
//   console.log("they are equaled");
// } else if (a > b) {
//   console.log("a is bigger then b")
// } else {
//   console.log("a is smaller then b")
// }

// 2-4 Declare three variables and check which one is big or they’re equaled.

// 比較三變數,誰大誰小或相等
// 1.
// a=b || b=c;
// a=b, b>c;
// a=b, b<c;
// 2.
// a>b, b>c;
// a>b, b<c;
// a>b, b=c
// 3. 
// a<b, b>c;
// a<b, b<c;
// a<b, b=c

// let a, b, c;
// a = 9;
// b = "嗨";
// c = 9;

// if (a == b) {
//   if (b > c) {
//     console.log("a=b, b>c"); // a=b>c
//   } else if (b < c) {
//     console.log("a=b, b<c"); // a=b<c
//   } else {
//     console.log("a=b=c"); // a=b=c
//   }
// } else if (a > b) {
//   if (b > c) {
//     console.log("a>b, b>c"); // a>b>c
//   } else if (b < c) {
//     if (a > c) {
//       console.log("a>b, b<c, a>c"); // a>c>b
//     } else if (a < c) {
//       console.log("a>b, b<c, a<c"); // c>b>a
//     } else {
//       console.log("a>b, b<c, a=c"); // a=c>b
//     }
//   } else {
//     console.log("a>b=c"); // a>b=c
//   }
// } else if (a < b) {
//   if (b > c) {
//     if (a > c) {
//       console.log("a<b, b>c, a>c"); // b>a>c
//     } else if (a < c) {
//       console.log("a<b, b<c, a<c"); // b>c>a
//     } else {
//       console.log("a<b, b<c, a=c"); // b>c=a
//     }
//   } else if (b < c) {
//     console.log("a<b, b<c"); // c>b>a
//   } else {
//     console.log("a<b, b=c"); // a<b=c
//   }
// } else {
//   console.log("填入的值只能為數字");
// }


// 2-5 Declare two variables for range (ex. 10, 100), 
// declare another number variable and check a number is present in given range


// let rangeA, rangeB, x;
// rangeA = 10;
// rangeB = 100;
// x = 79;

// 1. 在範圍內 2. 在範圍外(小於 A 或 大於 b)
// if (rangeA <= x && x <= rangeB) {
//   console.log("a<x<b");
// } else {
//   if (x < rangeA) {
//     console.log("x 小於指定範圍");
//   } else if (x > rangeB) {
//     console.log("x 大於指定範圍");
//   }
// }

// 2-6 Declare a variable called year and check the year is leap year or not.
let year = 0;
year = 2000;
// 閏年：
// 1. 能被四整除且除以100不可整除 = 閏年
// 2. 能被四百整除 = 閏年
// 3. 能被100整除，且除以400不可整除 = 平年
// 4. 不能被四整除 = 平年

if (year % 4 == 0 && year % 100 != 0) {
  console.log("閏年");
} else if (year % 400 == 0) {
  console.log("閏年");
} else if (year % 100 == 0 && year % 400 != 0) {
  console.log("平年");
} else {
  console.log("平年");
}

