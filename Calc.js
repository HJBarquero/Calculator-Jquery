var sign = true;
var currentText = $('#calcText').html('0');

try {
  $(function () {
    clearText();
  });

  function operation(oper) {
    result = eval(currentText);
    $('#point').removeAttr('disabled');
    if (oper === "=") {
      currentText = (result);
      sign = true;
    } else {
      currentText = (result + oper);
      sign = false;
    }

    $('#calcText').html(currentText);
    
  }

  function editText(number) {
    pointToggle(number, 'false');
    if (sign) {
      currentText = number;
      sign = false;
    } else {
      currentText = (currentText + number);
    }
    $('#calcText').html(currentText);
  }

  function clearText() {
    $('#calcText').html('0');
    currentText = '';
    console.log('initial clear');
  }

  //Funct point

  function pointToggle(number) {
    if (number === '.') {
      $('#point').attr('disabled', 'true');
    }

  }

  function deletebtn() {
    if (currentText.length === 1 || currentText.length < 1) {

      $('#calcText').html('0');
      currentText = '';
      console.log('current: ', currentText);

    } else {

      console.log('pressed delete')
      console.log(currentText);
      currentText = currentText.slice(0, -1);
      console.log('.slice element: ', currentText.slice(0, 1));
      $('#calcText').html(currentText);
    }

  }

} catch (error) { //Show the error
  currentText = 'Syntax Error';
  console.log(currentText);
  console.log(error.message);

}



//Variables

/*const screen = document.querySelector('.calc_screen');
const btns = document.querySelectorAll('.calc_btns button');



//Get each btn element of the calculator
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('pressed button: ', btn.textContent);

    const getBtn = btn.textContent;
    console.log(btns);
    try {
      if (btn.classList.contains('C')) { //get the class 'C' and when is pressed, screen.textContent = '0'
        screen.textContent = '0';
        return;

      } if (btn.classList.contains('delete')) {

        if (screen.textContent.length === 1) {
          screen.textContent = '0';

        } else {
          screen.textContent = screen.textContent.slice(0, -1); //Delete the last btn with .slice

        }
        return;
      }

      if (btn.classList.contains('equal')) {
        console.log('val:');
        console.log('screen value: ', screen.textContent);
        console.log(getBtn);

      }

      if (btn.classList.contains('equal')) {

        screen.textContent = eval(screen.textContent); //Result (eval screen.textContent)

        return;
      }

      if (screen.textContent === '0') {
        screen.textContent = getBtn; //If pressed 0, still in 0 funct

      } else {
        screen.textContent += getBtn;

      }

    } catch (error) { //Capture the error
      screen.textContent = 'Syntax Error';
      console.log('More  technical details  error: ', error.message);
    }

  })
})
*/

