// 顯示一個訊息：
// 使用 Promise，在延遲 1 秒後，在控制台打印出 "Hello, world!"。
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const msg = "Hello, world!";
    resolve(msg);
  }, 1000);
});
myPromise.then((msg) => {
  console.log(msg);
});