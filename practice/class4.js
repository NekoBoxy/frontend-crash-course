// let count = 0;
// const interval = setInterval(function () {
//   console.log("count", count);
//   count++;
//   if (count === 5) {
//     clearInterval(interval); // 會中斷並取消掉 setinterval
//   }
// }, 2000)

const myPromise = new Promise((result, reject) => {
  setTimeout(() => {
    const data = "成功";
    console.log(data);
    const error = new Error("失敗");
    reject(error);
  }, 1000)
});

// myPromise.then((el) => {
//   console.log(el);
// });

myPromise.catch((el) => {
  console.log("error");
});

// 
console.log("step 1");
const promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log();
    resolve();
  })
});