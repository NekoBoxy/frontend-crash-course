let inputNumber = 0;
let ans = 0;
let symbol = "";

// 取 input 的 dom
const elInput = document.querySelector(".input-area input");

// 取 input 的 value
function getData() {
  // 轉型為數值，因 html 是字串
  inputNumber = parseInt(elInput.value, 10);
  if (symbol == "") {
    // 第一次計算時，將得到的數值賦值給 ans
    ans = inputNumber;
  }
}

function setSymbol(x) {
  symbol = x;
  elInput.value = "";
};

function caculate() {
  if (symbol === "+") {
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

