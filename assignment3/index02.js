// practice 1
// 2. Create a todo list, include a.input text, b.add button and c.block with todo items
// 如圖，做一個具有
// a.input text, 文字輸入區、
// b.add button 增加項目鈕，
// 和 c.block with todo items 已加入區塊的 todo list

// step 1.1 取輸入區 input & button 的 dom
const newTodo = document.getElementById("newTodo"); // input#newTodo
const submitBtn = document.getElementsByClassName(".submitBtn");
// console.log("newTodo", newTodo);
// console.log("submitBtn", submitBtn);

// step 1.2 建立資料格式(陣列)與數量
const todoDatas = [];
let dataLen = 0;

// step 1.3 加入新紀錄到 todoDatas 中
function addTodo() {
  // listCount 放在函式內，更新後才取的到值，才能做新 id
  dataLen = todoDatas.length;
  let content = newTodo.value;
  let id = dataLen;
  todoDatas.push({ id, content });
  // console.log("todoDatas", todoDatas);
  newTodo.value = "";
  newDom({ id, content });
}


// 畫面載入時做第一次todo資料的渲染
// 新增todo時再針對新增的項目作渲染
// 渲染新 todo 的 dom
function newDom({ id, content }) {
  // 建虛擬 div dom
  let elDiv = document.createElement("div");
  elDiv.textContent = content; // 把值放進 div 中
  elDiv.setAttribute("data-id", id); // 替 div 加上 data-id 屬性
  // 建虛擬 btn dom
  let elBtn = document.createElement("button");
  elBtn.textContent = "X";
  elBtn.type = "button"; // type="button"
  // (虛擬)在 div 內放入 btn
  elDiv.appendChild(elBtn);
  // 將 dom 實體化
  document.querySelector(".list-Area").appendChild(elDiv); // 將 div 置於指定區域並渲染
};

function deleteTodo() {

};


// data 的初次渲染
// function init() {
//   if (todoDatas.length != 0) {
//     // elDiv 意為 element Div
//     for (i = 0; i <= dataLen; i++) {
//       let elDiv = document.createElement("div"); // 建一個 div
//       let elText = todoDatas[i].content; // 準備文字內容
//       elDiv.textContent = elText; // 把值放進 div 中
//       elDiv.setAttribute("data-id", todoDatas[i].id);
//       document.querySelector("list-Area").appendChild(elDiv); // 置於指定區域並渲染
//     }
//   }
// };


// init();