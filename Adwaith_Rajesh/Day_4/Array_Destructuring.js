const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// ======================Destructuring Arrays=======================

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //whenever js engine sees array synatx on the left side it will undestand that it will need destructuring.Destructuring(simply means unpacking)
console.log(x, y, z);
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

Switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

This can be also written in

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// =====================Nested Destructuring=========================

const nested = [2, 4, [5, 6]];

const [i, , j] = nested;
console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

Default Values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);