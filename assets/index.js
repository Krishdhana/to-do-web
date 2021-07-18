//To-do List Functions

let ul = document.querySelector("ul");
let textbox = document.getElementsByClassName("text")[0];
let addbtn = document.getElementsByClassName("btn-add")[0];
let clrbtn = document.getElementsByClassName("btn-clear")[0];
let body = document.querySelector("body");
let bg1 = document.getElementsByClassName("bgcolor")[0];
let bg2 = document.getElementsByClassName("bgcolor")[1];

body.style.background = `linear-gradient(to right, ${bg1.value}, ${bg2.value})`;

//Functions

addbtn.addEventListener("click", addItem);

clrbtn.addEventListener("click", clearItem);

function addItem() {
  if (textbox.value.length > 0) {
    let li = document.createElement("li");
    li.textContent = textbox.value;
    ul.append(li);
    textbox.value = "";
  }
}

function clearItem() {
  let li = ul.firstElementChild;
  if (li != null) ul.removeChild(li);
}

textbox.addEventListener("keypress", function () {
  if (event.keyCode === 13) addItem();
});

bg1.addEventListener("input", setBackground);
bg2.addEventListener("input", setBackground);

function setBackground() {
  body.style.background = `linear-gradient(to right, ${bg1.value}, ${bg2.value})`;
}
