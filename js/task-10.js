function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#control, input');
const btnCreate = document.querySelector('#controls button[data-create]');
const btnDestory = document.querySelector('#controls button[data-destroy]');
const area = document.querySelector('#boxes');

console.log(btnDestory)
btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount){
  amount = input.value;

  for(let i = 0; i < amount; i++){
  const addedDiv = document.createElement("div");
  
  area.append(addedDiv)
  }
}

btnDestory.addEventListener('click', destroyBoxes);

function destroyBoxes(){
  const childrenArea = area.childNodes;
  childrenArea.remove();
}
