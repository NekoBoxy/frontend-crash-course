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

function getActivity() {
  const xhr = new XMLHttpRequest();
  const method = "GET";
  const url = "https://www.boredapi.com/api/activity";
  xhr.open(method, url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // step 取得 api 回傳的資料並轉成純文字
      // console.log("xhr.responseText:", xhr.responseText);
      const json = JSON.parse(xhr.responseText);
      const text = json.activity;
      // 更改指定 DOM 的文字內容
      target.innerHTML = text;
    } else {
      console.error("status:", xhr.status);
    }
  };
  xhr.send(); // 要有這個才收的到戳 API 的回傳結果
};