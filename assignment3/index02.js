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
let todoDatas = [
  {
    id: 0,
    content: "吃飯",
  },
  {
    id: 1,
    content: "洗澡",
  },
  {
    id: 2,
    content: "買珍奶",
  },
  {
    id: 3,
    content: "吃西瓜",
  },
];
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
  changeTotalDom(id);
  newDom({ id, content });
}

// 建立 todo 的虛擬 dom 與實體化
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

// 刪除 todo
function deleteTodo(element) {
  // want: 抓到指定 id 後刪掉整個 DOM
  // 按下 btn 後往上找父層的 data-id <div data-id="">...</div>
  const elDiv = document.querySelector("data-id");
  console.log("elDiv", elDiv);
  console.log("element", element);

};

// 將 .list-Area 內的所有 div 與陣列資料清空
function deleteAll() {
  dataLen = todoDatas.length;
  const parentNode = document.querySelector(".list-Area");
  // console.log(parentNode); // <div class="list-Area">...</div>
  const elDivNodeList = document.querySelectorAll(".list-Area div");
  // console.log("elDivNodeList", elDivNodeList); // nodelist(4) [div, div, div, div]
  console.log(dataLen); // 4
  for (let i = 0; i <= dataLen - 1; i++) {
    let delNode = elDivNodeList[i]
    parentNode.removeChild(delNode);
  }
  // 清空陣列資料
  todoDatas = [];
  console.log(todoDatas.length); // 0
  changeTotalDom(0);
};


// 修改現有 todo 數字
function initTotalDom() {
  let elDivNodeList = document.getElementsByClassName("total"); // 回傳結果是 陣列
  let elDiv = elDivNodeList[0]; // 只有一筆，所以 i=0
  elDiv.textContent = dataLen; // 把數字改成陣列長度(資料筆數)
  // console.log("initTotal", elDiv.textContent);
};

// data 更新後修改顯示的 todo 數字
function changeTotalDom(id) {
  let elDivNodeList = document.getElementsByClassName("total"); // 回傳結果是 陣列
  let elDiv = elDivNodeList[0]; // 只有一筆，所以 i=0
  if (todoDatas.length >= 1) {
    elDiv.textContent = id + 1; // todoDatas 有資料時，把數字改成陣列長度(資料筆數)
  } else {
    elDiv.textContent = id; // id = 0
  }
  // console.log("changeTotal", elDiv.textContent);
};

// todo list 的初次渲染
function init() {
  dataLen = todoDatas.length;
  for (let i = 0; i <= dataLen - 1; i++) {
    newDom(todoDatas[i]);
  }
  initTotalDom();
};

init();