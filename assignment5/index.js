let inputNumber = 0;
let ans = 0;
let symbol = "";

// 取 input 的 dom
const elInput = document.querySelector(".counter input");

// 取 input 的 value
function getData() {
  // 每次 input 輸入新值後，取得 elInput.value
  // ps. html 元素需轉型為 number
  inputNumber = parseInt(elInput.value, 10);
  // 第一次計算時 symbol 為空字串，將得到的數值賦值給 ans 便於後續計算。
  if (symbol == "") {
    ans = inputNumber;
  }
}

function setSymbol(x) {
  symbol = x;
  elInput.value = "";
};

function caculate() {
  if (symbol === "+") {
    // 新 ans 值為舊 ans & inputNumber 的計算結果
    ans = ans + inputNumber;
  } else if (symbol === "-") {
    ans = ans - inputNumber;
  } else if (symbol === "*") {
    ans = ans * inputNumber;
  } else if (symbol === "/") {
    ans = ans / inputNumber;
  } else {
    alert("輸入錯誤，請重新來過。");
    return; // 回傳計算結果
  }
  elInput.value = ans;
}

function clearAll() {
  inputNumber = 0;
  ans = 0;
  symbol = "";
  elInput.value = "";
};

