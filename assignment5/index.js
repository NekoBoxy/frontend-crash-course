let inputNumber = 0;
let ans = 0;
let symbol = "";

const elInput = document.querySelector(".input-area input");
// console.log(elInput);

function getData() {
  inputNumber = parseInt(elInput.value, 10);
  if (symbol == "") {
    ans = inputNumber;
  }
}

function setSymbol(x) {
  symbol = x;
};

function caculate() {
  if (symbol == "+") {
    ans = ans + inputNumber;
  } else if (symbol === "-") {

  } else if (symbol === "*") {

  } else if (symbol === "/") {

  } else {
    alert("輸入錯誤，請重新來過。");
    return;
  }
  console.log(ans);
  elInput.value = ans;
}