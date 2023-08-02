const range = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

const handler = (e) => {
    const value = e.currentTarget.value;
    textSize.style.fontSize = `${value}px`;
    
}

range.addEventListener('input', handler);