const categories = document.querySelectorAll('.item');

const numberCategories = categories.length;
console.log(`Number of categories: ${numberCategories}`)

for(const category of categories){
    console.log(`Category: ${category.querySelector('h2').textContent}
    Elements: ${category.querySelector('ul').children.length}`);
}
