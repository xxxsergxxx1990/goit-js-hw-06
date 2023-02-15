const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const allIngredients = document.querySelector('#ingredients')

const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement('li');
  items.textContent = ingredient;
  items.classList = 'item'
  allIngredients.append(items)
})
console.log(allIngredients)
