function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#control, input');
const btnCreate = document.querySelector('#controls button[data-create]');
const btnDestory = document.querySelector('#controls button[data-destroy]');
const area = document.querySelector('#boxes');


btnCreate.addEventListener('click', createBoxes);

function createBoxes(amount){
  amount = input.value;
 if(amount > 100){
    return alert('Możesz utworzyć maksymalnie 100 kwadratów');
   }else{
    area.innerHTML = '';
    let sizeW = 20;
    let sizeH = 20;
    for(let i = 0; i < amount; i++){
     const addedDiv = document.createElement("div");
     addedDiv.style.backgroundColor = getRandomHexColor();
     addedDiv.style.width = `${sizeW += 10}px`;
     addedDiv.style.height = `${sizeH += 10}px`;
     area.append(addedDiv);
    }
  }
}

btnDestory.addEventListener('click', destroyBoxes);

function destroyBoxes(){
  area.innerHTML = '';
}
