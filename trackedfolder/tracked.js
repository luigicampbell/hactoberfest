const helloJs = "Hello";
console.log(helloJs);
alert('hello js');
const fruits = ["bananas", "apples", "strawberries"];
console.log(fruits);

//added array veggies
const veggies = ["cucumbers", "broccolis", "kale", "other nasty shit"];
console.log(veggies);

//found the bug: needed explicit return to hoist object
const fruitSalad = fruits.map(fruit => {
    return { salad: `sliced ${fruit}` }
});
console.log(fruitSalad);

const fruitPies = fruits.map(fruit => {
    return { pie: `${fruit} pie` }
});
console.log(fruitPies);