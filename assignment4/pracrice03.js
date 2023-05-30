// 處理錯誤：
// 創建一個 Promise，該 Promise resolve 或 reject。
// 使用 async / await 在控制台打印出相應的訊息，
// 如果 Promise 成功，則打印出 "Promise resolved!"，
// 如果 Promise 失敗，則打印出 "Promise rejected!"。

// 練習 1
// const myPromise2 = (status) => {
//   return new Promise((resolve, reject) => {
//     if (status === true) {
//       setTimeout(() => {
//         const msg = "Promise resolved!";
//         resolve(msg);
//       }, 0)
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

// getPromise(false);

// 練習 2
const predictBtn3 = document.getElementById("predictBtn3");

const errorTest = (isError) => {
  return new Promise((resolve, reject) => {
    if (isError) {
      reject("Promise rejected!");
    } else {
      resolve("Promise resolved!");
    }
  });
};

predictBtn3.onclick = async function () {
  // Error
  try {
    await errorTest(true);
  } catch (e) {
    console.log(e);
  }
  // Correct
  try {
    const result = await errorTest(false);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};