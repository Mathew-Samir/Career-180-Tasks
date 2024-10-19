console.log('%cMathew Samir', "color:green; font-weight:bold; font-size:17px;");
console.log('%cTask 2 :Coding Meetup #14 - Higher-Order Functions Series - Order the food', "color:green; font-weight:bold; font-size:14px;");
// ### Task 2 :Coding Meetup #14 - Higher-Order Functions Series - Order the food ###



function orderFood(list) {
  // thank you for checking out the Coding Meetup kata :)
  let mealCounts = {};

  // Iterate over each developer in the list
  list.forEach(dev => {
    // Get the meal type selected by the developer
    let meal = dev.meal;

    // If this meal type has been encountered before, increment the count, otherwise initialize it to 1
    mealCounts[meal] = (mealCounts[meal] || 0) + 1;
  });

  return mealCounts;
}

var list = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', meal: 'vegetarian' },
];

// Call the correct function 'orderFood'
console.log(orderFood(list));



////////////////////////////////////////////////////////
