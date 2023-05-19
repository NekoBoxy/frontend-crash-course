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
const todoDatas = [
  // {
  //   id: 0,
  //   content: "Buy a new laptop",
  // },
  // {
  //   id: 1,
  //   content: "運動",
  // },
];

// step 1.3 加入新紀錄到 todoDatas 中
function addNewList() {
  const listCount = todoDatas.length;
  let content = newTodo.value;
  let id = listCount;
  todoDatas.push({ "data-id": id, content });
  console.log(todoDatas);
  newTodo.value = "";
  // newDom();
}

// 新增 dom
function newDom() {
  // elDiv 意為 element Div；建一個 div(尚未渲染)
  for (let i = 0; i <= listCount; i++) {
    let elDiv = document.createElement("div");
    elDiv.setAttribute("data-id", todoDatas[i].id); // 把 id 塞進去
    let elText = todoDatas[i].content.toString();
    console.log(elText);
    elDiv.textcontent = elText; // 把 content 塞進去
    // console.log(elDiv);
    // document.querySelector(".list-Area").appendChild(elDiv);
  }
};

// newDom();

