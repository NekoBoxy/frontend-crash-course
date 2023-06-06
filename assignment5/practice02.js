// 流程：
// 做一個 todolist，具新增、刪除、標記完成的功能。

// code 來源 3-1.2
const newTodo = document.getElementById("newTodo");
const submitBtn = document.getElementsByClassName(".submitBtn");
const listArea = document.querySelector(".list-Area");
const total = document.querySelector(".total");

let todoList = [
  {
    id: 0,
    content: "吃飯",
  },
  {
    id: 1,
    content: "洗澡",
  },
];
let dataLen = todoList.length;
function addTodo() {
  let content = newTodo.value;
  let id = dataLen;
  todoList.push({ id, content });
  newTodo.value = "";
  randerList();
  dataLen++;
}

// 新增 todo 的虛擬 dom 與實體化
function newDom({ id, content }) {
  // 建虛擬 div dom (外殼)
  let elDiv = document.createElement("div");
  elDiv.setAttribute("data-id", id); // 替 div 加上 data-id 屬性
  // 建 checkbox dom
  let elCheck = document.createElement("input");
  elCheck.type = "checkbox";
  // 建虛擬 span dom
  let elSpan = document.createElement("span");
  elSpan.textContent = content; // 把值放進 div 中
  // 建虛擬 btn dom
  let elBtn = document.createElement("button");
  elBtn.textContent = "X";
  elBtn.type = "button";
  elBtn.onclick = deleteTodo;
  // Add
  // 會依順序生成
  elDiv.appendChild(elCheck);
  elDiv.appendChild(elSpan);
  elDiv.appendChild(elBtn);
  // 將 dom 實體化
  document.querySelector(".list-Area").appendChild(elDiv); // 將 elDiv 置於指定區域 .list-Area 並渲染
};

function deleteTodo(element) {
  const idStr = element.target.parentNode.getAttribute("data-id");
  const id = parseInt(idStr, 10);
  const target = todoList.findIndex(item => item.id === id);
  todoList.splice(target, 1);
  randerList();
};

function deleteAllTargetDom() {
  todoList = [];
  randerList();
};

function changeTotalDom(id) {
  let elDivNodeList = document.getElementsByClassName("total");
  let elDiv = elDivNodeList[0];
  if (todoList.length >= 1) {
    elDiv.textContent = id + 1;
  } else {
    elDiv.textContent = id;
  }
};

function randerList() {
  listArea.innerHTML = "";
  const len = todoList.length;
  for (let i = 0; i <= len - 1; i++) {
    newDom(todoList[i]);
  }
  total.innerHTML = len;
};

function init() {
  randerList();
};

init();