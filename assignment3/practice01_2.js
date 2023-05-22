// practice 1
// 2. Create a todo list, include a.input text, b.add button and c.block with todo items
// 如圖，做一個具有
// a.input text, 文字輸入區、
// b.add button 增加項目鈕，
// 和 c.block with todo items 已加入區塊的 todo list

// step 1.1 取輸入區 input & button 的 dom
const newTodo = document.getElementById("newTodo"); // input#newTodo
const submitBtn = document.getElementsByClassName(".submitBtn"); // 是陣列
const listArea = document.querySelector(".list-Area");

// step 1.2 建立資料格式(陣列)與數量
let todoList = [
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

// step 1.3 加入新紀錄到 todoList 中
function addTodo() {
  // listCount 放在函式內，更新後才取的到值，才能做新 id
  dataLen = todoList.length;
  let content = newTodo.value;
  let id = dataLen;
  todoList.push({ id, content });
  // console.log("todoList", todoList);
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
  // 在 btn element 上加上 onclick="deleteTodo()"
  // elBtn.setAttribute("onclick", "deleteTodo()");
  elBtn.onclick = deleteTodo; // 按按鈕才執行 fn
  // (虛擬)在 div 內放入 btn
  elDiv.appendChild(elBtn);
  // 將 dom 實體化
  document.querySelector(".list-Area").appendChild(elDiv); // 將 elDiv 置於指定區域 .list-Area 並渲染
};

// 刪除 todo
function deleteTodo(element) {
  // want: 抓到指定 id 後刪掉整個 DOM
  // 找到 id
  const idStr = element.target.parentNode.getAttribute("data-id"); // 字串
  const id = parseInt(idStr, 10); // 轉數字
  // 刪陣列資料：1. findindex or 2. filter；若資料沒有正常排序，直接 splice 刪 index 會刪錯
  // const target = todoList.findIndex(function (item) {
  //   return item.id === id;
  // });
  // 改寫為箭頭函式
  const target = todoList.findIndex(item => item.id === id); // 針對陣列內資料 item 一筆筆比對，若 item.id === id 時回傳找到的結果 (id)
  todoList.splice(target, 1); // 從目標 index 開始刪一筆資料
  // 移除 DOM
  clearListDom();
  // 重新渲染 DOM
  randerList();
};

// 將 .list-Area 內的所有 div 與陣列資料清空
function deleteAllTargetDom() {
  clearListDom();
  clearTodoList();
};

// 清空 DOM
function clearListDom() {
  dataLen = todoList.length;
  const parentNode = document.querySelector(".list-Area");
  // console.log(parentNode); // <div class="list-Area">...</div>
  const elDivNodeList = document.querySelectorAll(".list-Area div");
  // console.log("elDivNodeList", elDivNodeList); // nodelist(4) [div, div, div, div]
  console.log(dataLen); // 4
  for (let i = 0; i <= dataLen - 1; i++) {
    let delNode = elDivNodeList[i]
    parentNode.removeChild(delNode);
  }
};

// 清空陣列資料
function clearTodoList() {
  todoList = [];
  console.log(todoList.length); // 0
  changeTotalDom(0);
};

// 修改現有 todo 數字
function updateTotalDom() {
  let elDivNodeList = document.getElementsByClassName("total"); // 回傳結果是 陣列
  let elDiv = elDivNodeList[0]; // 只有一筆，所以 i=0
  elDiv.textContent = dataLen; // 把數字改成陣列長度(資料筆數)
  // console.log("initTotal", elDiv.textContent);
};

// data 更新後修改顯示的 todo 數字
function changeTotalDom(id) {
  let elDivNodeList = document.getElementsByClassName("total"); // 回傳結果是 陣列
  let elDiv = elDivNodeList[0]; // 只有一筆，所以 i=0
  if (todoList.length >= 1) {
    elDiv.textContent = id + 1; // todoList 有資料時，把數字改成陣列長度(資料筆數)
  } else {
    elDiv.textContent = id; // id = 0
  }
  // console.log("changeTotal", elDiv.textContent);
};

function randerList() {
  // 清空 HTML List
  listArea.innerHTML = "";
  // 重新渲染 todolist DOM
  dataLen = todoList.length;
  for (let i = 0; i <= dataLen - 1; i++) {
    newDom(todoList[i]);
  }
  // 更新顯示總數
  updateTotalDom();
};

// todo list dom 的初始化
function init() {
  randerList();
};

init();