let numberOne = "";
let numberTwo = "";
let operator = "";
let result = "";

const buttonOne = document.querySelector(".one");
const buttonTwo = document.querySelector(".two");
const buttonThree = document.querySelector(".three");
const buttonFour = document.querySelector(".four");
const buttonFive = document.querySelector(".five");
const buttonSix = document.querySelector(".six");
const buttonSeven = document.querySelector(".seven");
const buttonEight = document.querySelector(".eight");
const buttonNine = document.querySelector(".nine");
const buttonZero = document.querySelector(".zero");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");
const buttonMultiply = document.querySelector(".multiply");
const buttonDivide = document.querySelector(".divide");
const buttonEqual = document.querySelector(".equal");
const buttonClear = document.querySelector(".clear");
const screen = document.querySelector(".screen");
const buttonBackspace = document.querySelector(".backspace");
const buttonDecimal = document.querySelector(".decimal");

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function operate(x, y) {
  if (operator === "+") {
    return add(x, y);
  } else if (operator === "-") {
    return subtract(x, y);
  } else if (operator === "*") {
    return multiply(x, y);
  } else if (operator === "/") {
    return divide(x, y);
  }
}

function deleteAll() {
  screen.textContent = "0";
  numberOne = "";
  numberTwo = "";
  operator = "";
  result = " ";
}

buttonOne.addEventListener("click", (e) => {
  if (operator === "") {
    numberOne += 1;
  } else {
    numberTwo += 1;
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
});
buttonTwo.addEventListener("click", () => {
  if (operator === "") {
    numberOne += 2;
  } else {
    numberTwo += 2;
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
});
buttonThree.addEventListener("click", () => {
  if (operator === "") {
    numberOne += 3;
  } else {
    numberTwo += 3;
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
});
buttonFour.addEventListener("click", () => {
  if (operator === "") {
    numberOne += 4;
  } else {
    numberTwo += 4;
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
});
buttonFive.addEventListener("click", () => {
  if (operator === "") {
    numberOne += 5;
  } else {
    numberTwo += 5;
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
});
buttonSix.addEventListener("click", () => {
  if (operator === "") {
    numberOne += 6;
  } else {
    numberTwo += 6;
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
});
buttonSeven.addEventListener("click", () => {
  if (operator === "") {
    numberOne += 7;
  } else {
    numberTwo += 7;
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
});
buttonEight.addEventListener("click", () => {
  if (operator === "") {
    numberOne += 8;
  } else {
    numberTwo += 8;
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
});

buttonNine.addEventListener("click", () => {
  if (operator === "") {
    numberOne += 9;
  } else {
    numberTwo += 9;
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
});

buttonZero.addEventListener("click", () => {
  if (operator === "") {
    numberOne += 0;
  } else {
    numberTwo += 0;
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
});

buttonPlus.addEventListener("click", () => {
  if (numberOne === "") {
    numberOne = 0;
  } else if (operator === "" && numberOne !== "") {
    operator = "+";
  } else if (numberOne !== "" && operator !== "" && numberTwo !== "") {
    numberOne = operate(parseFloat(numberOne), parseFloat(numberTwo));
    operator = "+";
    numberTwo = "";
  }
  screen.textContent = `${numberOne} ${operator}`;
});

buttonMinus.addEventListener("click", () => {
  if (numberOne === "") {
    numberOne = 0;
  } else if (operator === "" && numberOne !== "") {
    operator = "-";
  } else if (numberOne !== "" && operator !== "" && numberTwo !== "") {
    numberOne = operate(parseFloat(numberOne), parseFloat(numberTwo));
    operator = "-";
    numberTwo = "";
  }
  screen.textContent = `${numberOne} ${operator}`;
});

buttonMultiply.addEventListener("click", () => {
  if (numberOne === "") {
    numberOne = 0;
  } else if (operator === "" && numberOne !== "") {
    operator = "*";
    screen.textContent = `${numberOne} ${operator} `;
  } else if (numberOne !== "" && operator !== "" && numberTwo !== "") {
    numberOne = operate(parseFloat(numberOne), parseFloat(numberTwo));
    operator = "*";
    numberTwo = "";
  }
  screen.textContent = `${numberOne} ${operator}`;
});

buttonDivide.addEventListener("click", () => {
  if (numberOne === "") {
    numberOne = 0;
  } else if (operator === "" && numberOne !== "") {
    operator = "/";
  } else if (numberOne !== "" && operator !== "" && numberTwo !== "") {
    numberOne = operate(parseFloat(numberOne), parseFloat(numberTwo));
    operator = "/";
    numberTwo = "";
  }
  screen.textContent = `${numberOne} ${operator}`;
});

buttonEqual.addEventListener("click", () => {
  if (operator === "/" && numberTwo === "0") {
    return;
  } else if (numberOne !== "" && operator !== "" && numberTwo !== "") {
    result = operate(parseFloat(numberOne), parseFloat(numberTwo)).toFixed(8);
    screen.textContent = `${numberOne} ${operator} ${numberTwo} = ${result}`;
  }
});

buttonClear.addEventListener("click", () => {
  deleteAll();
});

buttonBackspace.addEventListener("click", () => {
  if (result !== "") {
    deleteAll();
  } else if (numberTwo !== "") {
    numberTwo = numberTwo.slice(0, -1);
    screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
  } else if (operator !== "") {
    operator = "";
    screen.textContent = `${numberOne}`;
  } else if (numberOne !== "") {
    numberOne = numberOne.slice(0, -1);
    screen.textContent = `${numberOne}`;
  }
});

buttonDecimal.addEventListener("click", () => {
  if (numberTwo.includes(".")) return;
  if (
    numberOne !== "0" &&
    operator !== "" &&
    numberTwo !== "" &&
    !numberTwo.includes(".")
  ) {
    numberTwo += ".";
    screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
  } else if (operator === "") {
    numberOne += ".";
    screen.textContent = `${numberOne}`;
  }
});
