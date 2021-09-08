// Using the global items variable created in items.js, use array.map(), array.reduce(), array.forEach(), and array.filter() to help you through the assignment questions
// The answers should be logged out to your console using console.log()
// Make sure the output matches the answers below each question
// Please comment your code as you walk through your process
// It is suggested that you write functions that return values, not just functions that call console.log


// 1. Show me how to calculate the average price of all items. Please console.log the average.
// Answer: $23.63


const prices = items.map(function(number){
    return (number['price']);
});
console.log(prices);

const totalPrices = function(acc, val) {
    return acc + val
}; 

const answerIs = (prices.reduce(totalPrices)/prices.length);

console.log(answerIs.toFixed(2));


// 2.Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.


const newList = items.filter(function(item){
    return item.price < 18 && item.price >= 14; 
});
console.log(newList);


// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

function isEuro(item) {
    return item.currency_code === "GBP";
}
console.log(items.find(isEuro));


// 4. Show me how to find which items are made of wood. Please console.log the ones you find.

const areWood = items.filter(function(element){
    return element.materials.includes("wood");
});
console.log(areWood);

