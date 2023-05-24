// 顯示一個訊息：
// 使用 Promise，在延遲 1 秒後，在控制台打印出 "Hello, world!"。
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "順利完成 1";
    resolve(data);
  }, 2000);
})

myPromise.then((data) => {
  console.log("順利完成 2", data);
});