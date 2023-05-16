// Practices 4 - create dom node
// create a simple html like example

// Append a p tag with “My first DOM created.” into container.
// 建一個變數，放入一個元素 p。注意：dom 尚未成形
let elementParagraph = document.createElement("p");
// 建一個變數，放入節點的文字。注意：dom 尚未成形
let pText = document.createTextNode("My first DOM created.");
// 把 text 的內容放進 p 中。注意：dom 尚未成形
elementParagraph.appendChild(pText);
// 搜尋 class=container，並在其內放入 elementParagraph。注意：<p> 在此生成與渲染
document.querySelector(".container").appendChild(elementParagraph);

// Append a ul tag.
let elementUl = document.createElement("ul"); // 建一個 ul
let elementLi = document.createElement("li"); // 建一個 li
document.querySelector(".container").appendChild(elementUl); // 找到 .container 並在內放入 elementUl

// Append 3 li tags into the ul tag with 3 items: red, blue, yellow using for loop. 
let colors = ['red', 'blue', 'yellow'];

for (let i = 0; i < colors.length; i++) {
  let elementLi = document.createElement("li"); // 建一個 li
  let liText = document.createTextNode(colors[i]); // 建 li 的文字內容
  elementLi.appendChild(liText); // 把 liText 塞進 elementLi 內
  document.querySelector("ul").appendChild(elementLi); // 找到名為 ul 的 tag，並在內放入 elementLi
}