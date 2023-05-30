// 處理錯誤：
// 創建一個 Promise，該 Promise resolve 或 reject。使用 async / await 在控制台打印出相應的訊息，如果 Promise 成功，則打印出 "Promise resolved!"，如果 Promise 失敗，則打印出 "Promise rejected!"。

// const myPromise2 = (status) => {
//   return new Promise((resolve, reject) => {
//     if (status === true) {
//       setTimeout(() => {
//         const msg = "Promise resolved!";
//         resolve(msg);
//       }, 3000)
//     } else {
//       reject("Promise rejected!");
//     }
//   })
// };

// async function getPromise(status) {
//   try {
//     const value = await myPromise2(status);
//     console.log(value);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getPromise(true);