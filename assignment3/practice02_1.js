const elDiv = document.getElementsByClassName("text-area");
let target = elDiv[0]; // <div class="text-area"></div>

function getActivity() {
  const xhr = new XMLHttpRequest();
  const method = "GET";
  const url = "https://www.boredapi.com/api/activity";
  xhr.open(method, url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // step 取得 api 回傳的資料並轉成純文字
      // console.log("xhr.responseText:", xhr.responseText);
      const json = JSON.parse(xhr.responseText);
      const text = json.activity;
      // 更改指定 DOM 的文字內容
      target.innerHTML = text;
    } else {
      console.error("status:", xhr.status);
    }
  };
  xhr.send(); // 要有這個才收的到戳 API 的回傳結果
};