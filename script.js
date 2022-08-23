'use strict';

const error = document.querySelector('.error');
const success = document.querySelector('.success');
const createAcct = document.querySelector('.createAcct');

function validatePassword() {
  document.addEventListener('input', (e) => {
    console.log(e.target.value);

    const password1 = document.querySelector('#password1').value;
    const password2 = document.querySelector('#password2').value;

    if (password1 === password2) {
      console.log('Login Success!');
      success.textContent = '';
      error.textContent = '';
    } else if (password1.length < 8) {
      console.log('Too short!');
      error.textContent = 'Password is TOO SHORT!';
      success.textContent = '';
    } else {
      console.log('Passwords do not match!');
      success.textContent = '';
      error.textContent = 'Passwords do not match!';
    }
  });
}

createAcct.addEventListener('click', validatePassword());
