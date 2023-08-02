const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

for(let i = 0; i < ingredients.length; i++){
const itemToList = document.createElement('li');
itemToList.textContent = ingredients[i];
list.append(itemToList);
}