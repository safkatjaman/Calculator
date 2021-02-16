const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display-class');

/* document.querySelector('.seven-button').addEventListener('click', function () {
      display.innerHTML = parseInt(event.target.innerText);
})


document.querySelector('.six-button').addEventListener('click', function () {
      display.innerHTML = parseInt(event.target.innerText);
}) */

buttons.forEach(function(button) {
      button.addEventListener('click', calculate);
})

/* Calculate Function */
function calculate (event) {
      /* clicked buttons value */
      const clickedButtonValue = event.target.value;

      if (clickedButtonValue === '=') {
            /* Checking if the display is empty or not */
            if (display.value !== '') {
                  /* calculate and show answer */
                  display.value = eval(display.value);
            }
      } else if (clickedButtonValue === 'C') {
            /* Clear the display board */
            display.value = '';
      } else if (clickedButtonValue === "←") {
            display.value = display.value.slice(0, -1);
      } else {
            /* otherwise concatenate it to the display */
            display.value += clickedButtonValue;
      }
}

