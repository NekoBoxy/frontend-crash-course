// 順序執行多個 Promise：
// 創建三個 Promise：Promise A 在 2 秒後 resolve，Promise B 在 1 秒後resolve，Promise C 在 3 秒後resolve。
// 使用 Promise 和 async / await，在它們依次解析完成後，在控制台打印出 "All promises resolved!"

const promiseA = (status) => {
  return new Promise((resolve, reject) => {
    if (status === true) {
      setTimeout(() => {
        const msg = "promiseA done";
        resolve(msg);
      }, 2000)
    } else {
      reject("promiseA rejected!");
    }
  })
};

const promiseB = (status) => {
  return new Promise((resolve, reject) => {
    if (status === true) {
      setTimeout(() => {
        const msg = "promiseB done";
        resolve(msg);
      }, 1000)
    } else {
      reject("promiseB rejected!");
    }
  })
};

const promiseC = (status) => {
  return new Promise((resolve, reject) => {
    if (status === true) {
      setTimeout(() => {
        const msg = "promiseC done";
        resolve(msg);
      }, 3000)
    } else {
      reject("promiseC rejected!");
    }
  })
};

async function getPromise(status) {
  try {
    const valueA = await promiseA(status);
    console.log(valueA);
    const valueB = await promiseB(status);
    console.log(valueB);
    const valueC = await promiseC(status);
    console.log(valueC);
    console.log("All promises resolved!");
  } catch (err) {
    console.log(err);
  }
}

getPromise(true);