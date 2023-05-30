// 顯示一個訊息：
// 使用 Promise，在延遲 1 秒後，在控制台打印出 "Hello, world!"。
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const msg = "Hello, world!";
//     resolve(msg);
//   }, 1000);
// });
// myPromise.then((msg) => {
//   console.log(msg);
// });

// 串接 API
const predictInput = document.getElementById("predictInput");
const predictBtn = document.getElementById("predictBtn");
const predictOutput = document.getElementById("predictOutput");

const getAPI = (url) => {
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

predictBtn.onclick = function () {
  const name = predictInput.value;
  const url = `https://api.agify.io/?name=${name}`;
  getAPI(url).then((json) => {
    predictOutput.textContent = json.age;
  });
  predictInput.value = "";
};

// async/await 寫法
// predictBtn.onclick = async function () {
//   const name = predictInput.value;
//   const url = `https://api.agify.io/?name=${name}`;
//   const json = await getAPI(url);
//   predictOutput.textContent = json.age;
// };