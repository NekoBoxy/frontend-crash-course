// 順序執行多個 Promise：
// 創建三個 Promise：Promise A 在 2 秒後 resolve，Promise B 在 1 秒後resolve，Promise C 在 3 秒後resolve。
// 使用 Promise 和 async / await，在它們依次解析完成後，在控制台打印出 "All promises resolved!"

const promiseA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promiseA done");
    }, 2000);
  });
};

const promiseB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promiseB done");
    }, 1000);
  });
};

const promiseC = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promiseC done");
    }, 3000);
  });
};

(async () => {
  const valueA = await promiseA();
  console.log(valueA);
  const valueB = await promiseB();
  console.log(valueB);
  const valueC = await promiseC();
  console.log(valueC);
  console.log("All promises resolved!");
})();
