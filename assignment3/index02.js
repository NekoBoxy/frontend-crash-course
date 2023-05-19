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
function addNewList() {
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
  // 建 div
  let elDiv = document.createElement("div");
  let elText = content; // 準備文字內容
  elDiv.textContent = elText; // 把值放進 div 中
  elDiv.setAttribute("data-id", id); // 替 div 加上 data-id
  document.querySelector(".list-Area").appendChild(elDiv); // 置於指定區域並渲染
  // 建 button
  let elBtn = document.createElement("button");
  let elBtnText = "X";
  elBtn.textContent = elBtnText;
  elBtn.type = "button"; // type="button"
  // elBtn.setAttribute("type", "button"); // type="button"
  // document.querySelectorAll("[data-id]").appendChild(elBtn);
  // document.querySelector("[data-id]").appendChild(elBtn);
  // addBtn();

};

// data 的初次渲染
function init() {
  if (todoDatas.length != 0) {
    // elDiv 意為 element Div
    for (i = 0; i <= dataLen; i++) {
      let elDiv = document.createElement("div"); // 建一個 div
      let elText = todoDatas[i].content; // 準備文字內容
      elDiv.textContent = elText; // 把值放進 div 中
      elDiv.setAttribute("data-id", todoDatas[i].id);
      document.querySelector("list-Area").appendChild(elDiv); // 置於指定區域並渲染
    }
  }
};

// 建立 btn，搜尋所有名為 data-id 的 attribute
function addBtn() {
  let elBtn = document.createElement("button");
  let elText = "X";
  elBtn.textContent = elText;
  elBtn.type = "button"; // type="button"
  // elBtn.setAttribute("type", "button"); // type="button"
  // document.querySelectorAll("data-id").appendChild(elBtn);
  let att = document.querySelectorAll("[data-id]");
  console.log(att);
  document.append

}

init();