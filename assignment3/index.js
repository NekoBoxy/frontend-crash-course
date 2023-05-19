// practice 1
// 1. Create a counter with add and sub and show current number
// 做一個含有加減功能、且能看到當前數值的計數器

// ps. HTML 是純文字檔，抓到的都是字串
const myNumber = document.querySelector("#myNumber"); // div#myNumber
function numIncrease() {
  // 把抓到的數值(string)轉型成十進位的數值(number)
  let number = parseInt(myNumber.innerHTML, 10); // init: 0
  // 替換 myNumber 的內容為新值
  // myNumber.innerHTML = ++number; // 第一次: 1
  myNumber.textContent = ++number; // 第一次: 1

};

function numDecrease() {
  let number = parseInt(myNumber.innerHTML, 10);
  myNumber.innerHTML = --number;
};

function numReset() {
  myNumber.innerHTML = "0";
};