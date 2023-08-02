const bodyColor = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor (){
  bodyColor.style.backgroundColor = getRandomHexColor();

  nameColor.textContent = getRandomHexColor();
}
