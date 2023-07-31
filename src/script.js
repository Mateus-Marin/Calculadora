let runningTotal = 0;
let buffer = "0";
let previousOperetor;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperetor === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperetor = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      handMath(symbol);
      break;
  }
}

function handMath(symbol) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperetor = symbol;
  buffer = "0";
}
function flushOperation(intBuffer) {
  if (previousOperetor === "+") {
    runningTotal += intBuffer;
  } else if (previousOperetor === "−") {
    runningTotal -= intBuffer;
  } else if (previousOperetor === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperetor === "÷") {
    runningTotal /= intBuffer;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}
function init (){
    document.querySelector('.calc-buttons').addEventListener ('click',function(e){
        buttonClick (e.target.innerText)
    })
}
init ()