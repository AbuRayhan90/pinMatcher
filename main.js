function randomPinGenerate() {
  let randomNumber = Math.round(Math.random() * 10000);
  randomNumber = randomNumber + '';
  if (randomNumber.length == 4) {
    return randomNumber;
  } else {
    return randomPinGenerate();
  }
}

function pinGenerate() {
  const pin = randomPinGenerate();
  document.getElementById('random-input').value = pin;
}

document.getElementById('keyPress').addEventListener('click', function (event) {
  const number = event.target.innerText;
  const calculate = document.getElementById('typing-input');
  if (isNaN(number)) {
    if (number == 'C') {
      calculate.value = '';
    }
  } else {
    calculate.value += number;
  }
});

function submitToCalculate() {
  const randomPin = document.getElementById('random-input').value;
  const typingPin = document.getElementById('typing-input').value;

  const success = document.getElementById('success');
  const unSuccess = document.getElementById('unsuccess');

  const warningNumber = document.getElementById('warningNumber');
  const warningNumberText = warningNumber.innerText;
  const newWarningNumber = parseInt(warningNumberText);

  if (newWarningNumber > 0) {
    if (randomPin == typingPin) {
      success.style.display = 'block';
      unSuccess.style.display = 'none';
    } else {
      success.style.display = 'none';
      unSuccess.style.display = 'block';
    }

    warningNumber.innerText = newWarningNumber - 1;
  } else {
    warningNumber.innerText = "You don't have";
    success.style.display = 'none';
    unSuccess.style.display = 'block';
    unSuccess.innerText = "Don't try again";
  }
}
