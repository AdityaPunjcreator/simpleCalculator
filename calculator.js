let plus = document.querySelector("#plus"); // getting the element with id 'plus' and storing it in "plus" identifier
let minus = document.querySelector("#minus"); // getting the element with id 'minus' and storing it in "minus" identifier
let multiply = document.querySelector("#multiply"); // getting the element with id 'multiply' and storing it in "multiply" identifier
let divide = document.querySelector("#divide"); // getting the element with id 'divide' and storing it in "divide" identifier
let menu = document.querySelector("#dropdownMenuButton"); // getting the element with id 'dropdownMenu' and storing it in "menu" identifier

plus.addEventListener("click", display); // calling the display function on the "click" event
function display() {
  menu.innerHTML = plus.innerText; // changing the innerHTML of menu to the innerText of "plus"
}

minus.addEventListener("click", display1);
function display1() {
  menu.innerHTML = minus.innerText;
}

multiply.addEventListener("click", display2);
function display2() {
  menu.innerHTML = multiply.innerText;
}

divide.addEventListener("click", display3);
function display3() {
  menu.innerHTML = divide.innerText;
}

let input1 = document.querySelector("#entry1"); //getting the element with id="entry1" and storing it in the "input1" identifier
let input2 = document.querySelector("#entry2"); //getting the element with id="entry2" and storing it in the "input2" identifier
let submit = document.querySelector("#calculate"); //getting the element with id="calculate" and storing it in the "calculate" storing in the "submit" identifier
let result = document.querySelector("#output"); //getting the element with id="output" and storing it in the "result" identifier
// creating the logic for the mathematical calculation
submit.addEventListener("click", calfn); // calling the "calfn" function on the 'click' event

console.log(input1);
function calfn() {
  if (menu.textContent == "+") {
    result.value = Number(input1.value) + Number(input2.value);
  }
  // when the text content of "menu" is equal to "+" then the function will be executed( in which the value of "result" will be the additon of the values feeded by the user in the input box)
  // used the Number function to convert the value to a number, (as if it is string it will concatenated instead of getting added)
  if (menu.textContent == "-") {
    result.value = Number(input1.value) - Number(input2.value);
  }
  if (menu.textContent == "x") {
    result.value = Number(input1.value) * Number(input2.value);
  }
  if (menu.textContent == "/") {
    result.value = Number(input1.value) / Number(input2.value);
  }
}
// this function will be triggered and will clear the "result" section  as soon as the user changes the values in the "input" section
input1.addEventListener("keyup", cleardata);
input2.addEventListener("keyup", cleardata);

function cleardata() {
  result.value = " ";
}
