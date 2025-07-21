const display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0' && value !== '.') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    const expression = display.innerText.replace(/÷/g, '/').replace(/×/g, '*');
    display.innerText = eval(expression);
  } catch (error) {
    display.innerText = 'Error';
  }
}
