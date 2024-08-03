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
  result = "";
}

function decimal() {
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
}

function backspace() {
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
}

function equal() {
  if (operator === "/" && numberTwo === "0") {
    alert("Dont divide by zero, please.");
    return;
  }

  if (numberOne !== "" && operator !== "" && numberTwo !== "") {
    result = operate(parseFloat(numberOne), parseFloat(numberTwo));
    if ((result % 1).toString().length > 8)
      result = operate(parseFloat(numberOne), parseFloat(numberTwo)).toFixed(5);
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo} = ${result}`;
}

function btnDivide() {
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
}

function btnMultiply() {
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
}

function minus() {
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
}

function plus() {
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
}

function addChar(newChar) {
  if (operator === "") {
    numberOne += newChar;
  } else {
    numberTwo += newChar;
  }
  screen.textContent = `${numberOne} ${operator} ${numberTwo}`;
}

buttonOne.addEventListener("click", (e) => {
  addChar(1);
});

buttonTwo.addEventListener("click", () => {
  addChar(2);
});

buttonThree.addEventListener("click", () => {
  addChar(3);
});

buttonFour.addEventListener("click", () => {
  addChar(4);
});
buttonFive.addEventListener("click", () => {
  addChar(5);
});
buttonSix.addEventListener("click", () => {
  addChar(6);
});
buttonSeven.addEventListener("click", () => {
  addChar(7);
});
buttonEight.addEventListener("click", () => {
  addChar(8);
});

buttonNine.addEventListener("click", () => {
  addChar(9);
});

buttonZero.addEventListener("click", () => {
  addChar(0);
});

buttonPlus.addEventListener("click", () => {
  plus();
});

buttonMinus.addEventListener("click", () => {
  minus();
});

buttonMultiply.addEventListener("click", () => {
  btnMultiply();
});

buttonDivide.addEventListener("click", () => {
  btnDivide();
});

buttonEqual.addEventListener("click", () => {
  equal();
});

buttonClear.addEventListener("click", () => {
  deleteAll();
});

buttonBackspace.addEventListener("click", () => {
  backspace();
});

buttonDecimal.addEventListener("click", () => {
  decimal();
});

document.addEventListener("keydown", (e) => {
  let k = e.key;
  k === "1"
    ? addChar(1)
    : k === "2"
    ? addChar(2)
    : k === "3"
    ? addChar(3)
    : k === "4"
    ? addChar(4)
    : k === "5"
    ? addChar(5)
    : k === "6"
    ? addChar(6)
    : k === "7"
    ? addChar(7)
    : k === "8"
    ? addChar(8)
    : k === "9"
    ? addChar(9)
    : k === "0"
    ? addChar(0)
    : k === ":"
    ? btnDivide()
    : k === "*"
    ? btnMultiply()
    : k === "Delete"
    ? deleteAll()
    : k === "Backspace"
    ? backspace()
    : k === "=" || k === "Enter"
    ? equal()
    : k === "."
    ? decimal()
    : k === "+"
    ? plus()
    : k === "-"
    ? minus()
    : "";
});
