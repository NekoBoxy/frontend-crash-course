// practice of loop (for and while)
// 請用 loop (for and while) 在 console 顯示：
// Show 1 to 10000
// 顯示 1 ~ 10000
// for (let i = 1; i <= 10000; i++) {
//   console.log(i);
// }

// Show 1 to 100 even numbers
// 顯示 1-100 間的偶數
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// } // 2 4 6 8 ...

// Show 1 to 100 odd numbers
// 顯示 1-100 間的奇數
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }


// Show 1 to 100 prime numbers
// 顯示 1-100 間的質數；質數：只能被自己及 1 整除者；1 不是質數。
// function isPrime(num) {
//   if (num === 1) {
//     return false;
//   }
//   // x 用 i 代替也可以，因兩者在各自函式內宣告，不影響彼此。
//   for (let x = 2; x < num; x++) {
//     if (num % x === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let i = 1; i <= 100; i++) {
//   if (isPrime(i)) {
//     console.log(i, "是質數");
//   } else {
//     console.log(i, "不是質數");
//   }
// }

// 流程：從 for 開始看
// i 的初始值為 1，每個迴圈後 i = i + 1, 至 i = 100 後迴圈結束。
// 迴圈開始後， i 傳進 if 中，進到 isPrime(i)，接 isPrime(num)
// 當傳進 isPrime 的 num 值等於 1 時，會進到 if 內，回傳 false，
// 並進到上一層 for 的 else { console.log(i, "不是質數");}；
// 當傳進 isPrime 的 num 值不等於 1 時，會進到 isPrime(num) 中的 for 迴圈，
// 迴圈數 (x) 由 2 開始，循環至 外層 i = 100 時，整個迴圈才會結束
// 當 i = 2 ，傳入 isPrime(num) 時，
// 因為 2 不可能< 2，故跳出迴圈，return true 到外層 if。
// 外層 if 收到 true，if(true){}，所以會回傳 true 的結果 console.log(i, "是質數")

// Declare a variable called size and show the height of size triangle
// 宣告一個名為 size 的變數，並讓 console print 出一個可控高度 (size) 的三角形
// 第一次印一個 *、第二次印兩個 * ，類推
// let size = 6;
// for (let i = 1; i <= size; i++) {
//   // let word = "";
//   // for (let j = 0; j < i; j++) { // 做內容?
//   //   // i = i + 1;
//   //   // i += 1;
//   //   word += "*";
//   //   // word = word + "*";
//   // }
//   const word = Array(i).fill("*").join(""); // ES6
//   console.log(word);
// }


// Show Multiplication Table (from 1*1 to 9*9)
// 讓 console 印一個九九乘法表出來
for (x = 1; x <= 9; x++) {
  for (y = 1; y <= 9; y++) {
    // console.log(x, "x", y, "=", x * y);
    console.log(`${x} x ${y} = ${x * y}`); // ES6 樣板字面值
  }
}
