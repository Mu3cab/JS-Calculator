const displayLastValue = document.getElementById("last-value");
const displayCurrentValue = document.getElementById("current-value");
const numbersBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const signBtn = document.querySelector(".sign");
const preferedColorScheme = window.matchMedia("(prefers-color-scheme: light)")
  .matches
  ? "light"
  : "dark";

const slider = document.getElementById("slider");
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

// slider.addEventListener("click", () => {
//   let switchTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
//   setTheme(switchTheme);
// });

setTheme(localStorage.getItem("theme") || preferedColorScheme);

const display = new Display(displayLastValue, displayCurrentValue);

numbersBtns.forEach((button) => {
  button.addEventListener("click", () => display.addNumber(button.textContent));
});

signBtn.addEventListener("click", () =>
  display.addSign(signBtn.textContent.slice(-1))
);

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", () => display.computed(operator.value));
});
