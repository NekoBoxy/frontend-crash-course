// Practices 3 - access dom node
// Create a simple html with some tags.
/* <div class="q-1">
<span>姓名：</span>
<input type="text" placeholder="請輸入你的名字">
<span>Choose Color</span>
<select name="colors" id="">
  <option value="yellow">黃</option>
  <option value="pink">粉紅</option>
  <option value="red">紅</option>
</select>
</div> */

// Using getElementById to get a element and print it.
const elementId = document.getElementById("name");
console.log(elementId); // <div id="name">姓名：</div>

// Using getElementsByClassName to get elements and print all.
const elementClassName = document.getElementsByClassName("q1");
console.log(elementClassName); // div.q1

// Using querySelector to get a element by id and print it.
const elementQuerySelectorId = document.querySelector("#name");
console.log(elementQuerySelectorId); // <div id="name">姓名：</div>

// Using querySelector to get a element by class and print it.
const elementQuerySelectorClass = document.querySelector(".q1");
console.log(elementQuerySelectorClass); // <div class="q1">...</div>

// Using querySelectorAll to get elements by class and print all.
const elementQuerySelectorAll = document.querySelectorAll("div");
console.log(elementQuerySelectorAll); // 0: div.q1  1:div.name
