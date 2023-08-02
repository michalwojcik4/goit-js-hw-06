const input = document.querySelector('#validation-input');
const minInuptLength = input.dataset.length;

const validation = (e) => {
    const value = e.currentTarget.value;
    if(value.length < minInuptLength){
        input.classList.add('invalid')
        input.classList.remove('valid')
    }else{
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
}

input.addEventListener('blur', validation);
