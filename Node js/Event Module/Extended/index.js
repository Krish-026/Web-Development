const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order', (size, toppings) => {
    console.log(`Order received! Size: ${size} - Toppings: ${toppings}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order('large', 'pepperoni');
pizzaShop.displayOrderNumber();