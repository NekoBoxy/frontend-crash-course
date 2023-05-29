// 範例 1 by 卡斯伯
let status = true;
const boxyPromise = function (status) {
  return new Promise(function (resolve, reject) {
    // // 改寫為箭頭函式
    // const boxyPromise = (status) => {
    //   return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (status) {
        resolve("boxyPromise 成功");
      } else {
        reject("boxyPromise 失敗");
      }
    }, 0);
  })
};

// 接收成功的結果
boxyPromise(true)
  // .then(function ("成功訊息") {
  .then(function (response) {
    console.log(response);
  });

// // 接收失敗的結果
// boxyPromise(false)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// 範例 2 丹尼
// 成功的範例
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "你成功惹";
    resolve(data);
  }, 1000);
});

myPromise.then((data) => {
  console.log(data);
});

// 失敗的接收
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data2 = "你失敗惹";
    reject(data2);
  }, 2500);
});

myPromise2.catch((data2) => {
  console.log(data2);
});