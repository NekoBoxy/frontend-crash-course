// 流程：
// 輸入秒數，按下開始開始倒數，再按可以暫停、再按可以繼續。
// 按下重置可以使 timer 與秒數歸零


const elSec = document.querySelector(".count-down input");
const elBtnReverse = document.querySelector(".count-down button");
let count = 0;
let pause = true;
let timer = null;

function getStart() {
  // 取 input 值
  count = elSec.value;
  // 判斷 pause 的狀態
  // 若 pause 為 true 時，進入 if 第一層
  if (pause) {
    pause = false; // 修改狀態
    elBtnReverse.innerText = "暫停"; // 修改 btn 顯示的字
    // 使用 setInterval，每秒做一次計算與顯示
    timer = setInterval(() => {
      // count--;
      count = count - 1;
      elSec.value = count;
    }, 1000)
  } else {
    pause = true;
    elBtnReverse.innerText = "繼續";
    clearInterval(timer); // 終止 timer
  }
};

// reset
function getReset() {
  elSec.value = "";
  elBtnReverse.innerText = "開始";
  clearInterval(timer);
};
