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

// 2. Create a todo list, include a.input text,
// b.add button and c.block with todo items
// 如圖，做一個具有 a.input text, 文字輸入區、
// b.add button 增加項目鈕，
// 和 c.block with todo items 已加入區塊的 todo list

// step 1. 先取 input 的輸入值
let newTodo = document.getElementById("newTodo");
const submitBtn = document.getElementsByClassName(".submitBtn");
// console.log(newTodo);
// console.log(submitBtn);
const initIndex = 0;
let newIndex = 0;


function listAdd() {
  // 取 input 值
  let submitValue = newTodo.value;
  console.log(submitValue);
  // elDiv 意為 element Div；建一個 div(尚未渲染)
  let elDiv = document.createElement("div");
  // 設定 div 的文字內容
  let divText = submitValue;
  // 設定 div 的 id 值
  if (newIndex === 0) {
    newIndex = initIndex + 1;
  } else {
    newIndex = newIndex + 1;
  }
  // 為 div 加上 id 與 id 值
  elDiv.setAttribute("id", newIndex);
  // 把值放進 div 中
  elDiv.textContent = divText;
  // 置於指定區域並渲染
  document.querySelector(".list-Area").appendChild(elDiv);
  console.log(elDiv);
  // 清空 input 值
  newTodo.value = "";
  // step 1. 取 input 值
  // step 2. create a div, 給它 id 跟 delete 鈕
  // step 3. 把 1. 得到的值放進去
  // step 4. 生成 dom
};

// 刪除指定 id 的 div
// step 1. 按下按鈕，找出指定的 dom
// step 2. 在找出指定的 dom id
// step 3. 刪除指定 id 的 dom
function getId(id) {
  let elLists = document.getElementsByClassName(".list-Area");
  console.log(elLists);
  // let id = document.getElementById()

}
function listDelete(id) {
  // 若有 id，刪指定id；若沒id，刪list全部內容
  // console.log(id); // 抓不到
  // 要先抓到指定 dom 的 id，

  // if (!id) {

  // } else if () {

  // } else {

  // }

};