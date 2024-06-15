// Get the text input elements and array of buttons
let text = document.getElementById("text-box");
let buttons = document.querySelectorAll("button");
let val = JSON.parse(localStorage.getItem("VALUES")) || [];
let string = "";
let arr = Array.from(buttons);
// addineg event listner to each of the button
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      text.value = string;
      localStorage.setItem("VALUES", JSON.stringify(val));
    } else if (e.target.innerHTML == "C") {
      string = "";
      text.value = string;
      localStorage.setItem("VALUES", JSON.stringify(text));
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      text.value = string;
      localStorage.setItem("VALUES", JSON.stringify(text));
    } else {
      string += e.target.innerHTML;
      text.value = string;
    }
  });
});
