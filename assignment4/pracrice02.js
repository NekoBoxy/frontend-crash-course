// 延遲執行：
// 使用 async / await，創建一個函數，該函數將延遲 3 秒後返回一個 Promise。然後使用 await 來等待 Promise 完成，並在控制台打印出 "Delay complete!"。

// 寫法 1：以立即函式執行
// const myPromise1 = (status) => {
//   return new Promise((resolve, reject) => {
//     if (status === true) {
//       setTimeout(() => {
//         const msg = "Delay complete!";
//         resolve(msg);
//       }, 3000)
//     } else {
//       reject("失敗");
//     }
//   })
// };

// (async () => {
//   await myPromise1(true)
//     .then((res) => {
//       console.log("res", res);
//     })
//     .catch((err) => {
//       console.log("err", err);
//     });
// })();

// 寫法 2：以 try...catch 包覆，再用 fn 執行
// const myPromise1 = (status) => {
//   return new Promise((resolve, reject) => {
//     if (status === true) {
//       setTimeout(() => {
//         const msg = "Delay complete!";
//         resolve(msg);
//       }, 3000)
//     } else {
//       reject("失敗");
//     }
//   })
// };

// async function getPromise(status) {
//   try {
//     const value = await myPromise1(status);
//     console.log("value", value);
//   } catch (err) {
//     console.log("err", err);
//   }
// }

// getPromise(true);