//ui var
const errorMessage = document.querySelector('.error');
const lengthOfCharacters = document.getElementById('charactersno');
const passwordDisplay = document.getElementById('passwordDisplay');
const genBtn = document.getElementById('generate');
const genDisplay = document.querySelector('.genDisplay');

//event listener
genBtn.addEventListener('click', () => {
  const number = lengthOfCharacters.value;

  if (number <= 20) {
    passwordDisplay.value = numberOfCharacters(number);
    genDisplay.textContent = numberOfCharacters(number);
  } else {
    error();
    reset();
  }
});

//generate random characters
function generateRandomCharacters() {
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()={}[],.';

  return characters[Math.floor(Math.random() * characters.length)];
}

//number of characters
function numberOfCharacters(length) {
  let generatedPass = '';

  for (i = 0; i < length; i++) {
    generatedPass += generateRandomCharacters();
  }

  return generatedPass;
}

//display error message
function error() {
  errorMessage.style.display = 'block';

  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 2000);
}

//reset
function reset() {
  lengthOfCharacters.value = '';
  genDisplay.textContent = '';
  passwordDisplay.value = '';
}
