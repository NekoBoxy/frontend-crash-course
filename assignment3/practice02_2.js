// 目的：輸入名字，按鈕取得 API 針對名字給的建議或搜尋年紀
// step 1. 取得 input 的 輸入值 name
// step 2. 把 name 傳入 getPredict(), 以參數為 name 踹 api，得到 API 回傳的結果
// step 3. 將得到結果更新到畫面上
const predictInput = document.getElementById("predictInput");
const predictBtn = document.getElementById("predictBtn");
const predictOutput = document.getElementById("predictOutput");

predictBtn.onclick = function () {
  const name = predictInput.value;
  const xhr = new XMLHttpRequest();
  const method = "GET";
  const url = `https://api.agify.io/?name=${name}`;
  xhr.open(method, url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const json = JSON.parse(xhr.responseText);
      const text = json.age;
      predictOutput.textContent = text;
    } else {
      console.error("status:", xhr.status);
    }
  };
  xhr.send();
};