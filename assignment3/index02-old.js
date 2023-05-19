// step 1. 先取 input 的輸入值
const content = document.getElementById("content");
const submitBtn = document.getElementsByClassName(".submitBtn");
// console.log(content);
// console.log(submitBtn);
const initIndex = 0;
let newIndex = 0;

// 新增 todo
function addNewList() {
  // 取 input 值
  let submitValue = content.value;
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
  elDiv.setAttribute("data-id", newIndex);
  // 把值放進 div 中
  elDiv.textContent = divText;
  // 置於指定區域並渲染
  document.querySelector(".list-Area").appendChild(elDiv);
  console.log(elDiv);
  // 清空 input 值
  content.value = "";
};

// 刪除 todo
function listDelete(id) {
  // 若有 id，刪指定id；若沒id，刪list全部內容
  // console.log(id); // 抓不到
  // 要先抓到指定 dom 的 id，
  btn.addEventListener("click", function () {
    console.log("hi");
    console.log(id);

  }, false)
  // if (!id) {

  // } else if () {

  // } else {

  // }
  // 刪除指定 id 的 div
  // step 1. 按下按鈕，找出指定的 dom
  // step 2. 在找出指定的 dom id
  // step 3. 刪除指定 id 的 dom

};

function getId(id) {
  let elLists = document.getElementsByClassName(".list-Area");
  console.log(elLists);

}