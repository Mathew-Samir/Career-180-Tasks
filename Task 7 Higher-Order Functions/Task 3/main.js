console.log('%cMathew Samir', "color:green; font-weight:bold; font-size:17px;");
console.log('%cTask 3 :Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details', "color:green; font-weight:bold; font-size:14px;");
// ### Task 3 :Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details ###



function askForMissingDetails(list) {
  return list.filter(dev => {
    // Iterate through each key in the object
    for (let key in dev) {
      // Check if any property value is null
      if (dev[key] === null) {
        // Add the 'question' property to the object
        dev.question = `Hi, could you please provide your ${key}.`;
        return true;  // Include this developer in the filtered list
      }
    }
    return false;  // Exclude the developer if no null value is found
  });
}

var list = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

console.log(askForMissingDetails(list));



////////////////////////////////////////////////////////
