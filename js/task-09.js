function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorText = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

const colorChange = () => {
  colorText.textContent =  getRandomHexColor();
  bodyEl.style.backgroundColor =  colorText.textContent;
};

btnEl.addEventListener('click', colorChange);