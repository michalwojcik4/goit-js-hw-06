const increment = document.querySelector('#counter button[data-action="increment"]');
const decrement = document.querySelector('#counter button[data-action="decrement"]');
const value = document.querySelector('#counter #value');
let counterValue = 0;

increment.addEventListener("click", () => {
    counterValue += 1;
    value.innerHTML = counterValue;
  });

decrement.addEventListener("click", () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
    });