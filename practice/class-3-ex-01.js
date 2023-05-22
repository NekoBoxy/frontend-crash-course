// exercise - show a random dog
// 1. Create a empty page
// exercise.html

// 2. Create a block to show a random dog image
// const xhr = new XMLHttpRequest();
// const method = "GET";
// const url = 'https://dog.ceo/api/breeds/image/random';
// xhr.open(method, url);
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     console.log(xhr.responseText);
//     // {"message":"https:\/\/images.dog.ceo\/breeds\/doberman\/n02107142_5181.jpg","status":"success"}
//   } else {
//     console.error("status:", xhr.status);
//   }
// };
// xhr.send();

// 3. Create a button for user click
// 4. Show a random dog image when user click
function getRandomPic() {
  const xhr = new XMLHttpRequest();
  const method = "GET";
  const url = "https://randomuser.me/api/";
  xhr.open(method, url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // console.log("xhr.responseText:", xhr.responseText);
      // 把 JSON 格式轉成我們看得懂的文字 json
      const json = JSON.parse(xhr.responseText);
      // console.log("json.results[0].picture.large", json.results[0].picture.large);
      const imgUrl = json.results[0].picture.large;
      const userImg = document.querySelector("#userImg");
      // console.log(userImg);
      userImg.src = imgUrl;
    } else {
      console.error("status:", xhr.status);
    }
  };
  xhr.send();
};