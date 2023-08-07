const input = document.querySelector('#validation-input');
const inuptLength = input.dataset.length;

function validation(e){
    if(parseInt(input.value.length) === parseInt(inuptLength)){
        input.classList.add('valid')
        input.classList.remove('invalid')
    }else{
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}

input.addEventListener('blur', validation);
