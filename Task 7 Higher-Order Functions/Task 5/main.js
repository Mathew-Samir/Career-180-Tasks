console.log('%cMathew Samir', "color:green; font-weight:bold; font-size:17px;");
console.log('%cTask 5 :Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages', "color:green; font-weight:bold; font-size:14px;");
// ### Task 5 :Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages ###



function countLanguages(list) {
  const languageCount = {};

  list.forEach(dev => {
    const language = dev.language;

    // Increment count or initialize it to 1
    if (languageCount[language]) {
      languageCount[language]++;
    } else {
      languageCount[language] = 1;
    }
  });

  return languageCount;
}

// Example usage
var list = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

console.log(countLanguages(list));


////////////////////////////////////////////////////////