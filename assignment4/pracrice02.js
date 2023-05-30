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


// 串 API
const predictInput2 = document.getElementById("predictInput2");
const predictBtn2 = document.getElementById("predictBtn2");
const predictOutput2 = document.getElementById("predictOutput2");

const getAPI2 = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const json = JSON.parse(xhr.responseText);
        resolve(json);
      } else {
        console.error("status:", xhr.status);
      }
    };
    xhr.send();
  });
};

predictBtn2.onclick = async function () {
  const name = predictInput2.value;
  const url = `https://api.agify.io/?name=${name}`;
  const json = await getAPI2(url);
  predictOutput2.textContent = json.age;
  predictInput2.value = "";
};