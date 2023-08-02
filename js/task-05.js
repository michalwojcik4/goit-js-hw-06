const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const handler = (e) => {
    const value = e.currentTarget.value;
    if(value.length <= 0){
        nameOutput.textContent = 'Anonymous'
    }else{
        nameOutput.textContent = value;
    }
}

nameInput.addEventListener('input', handler);