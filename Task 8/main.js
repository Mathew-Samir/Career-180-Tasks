console.log('%cMathew Samir Task 30/9/2024', "color:green; font-weight:bold; font-size:20px;");
console.log('%cTask 1 :#13 - Higher-Order Functions Series - Is the meetup language-diverse?', "color:green; font-weight:bold; font-size:14px;");



function isLanguageDiverse(list) {
  let counts = { Python: 0, Ruby: 0, JavaScript: 0 };

  // Count the number of participants for each language
  list.forEach(dev => {
    counts[dev.language]++;
  });

  // Extract the counts into an array
  let languageCounts = Object.values(counts);

  // Find the maximum and minimum counts
  let maxCount = Math.max(...languageCounts);
  let minCount = Math.min(...languageCounts);

  // Return true if the max count is at most 2 times the min count, otherwise false
  return maxCount <= 2 * minCount;
}

// Example usage
var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

console.log(isLanguageDiverse(list1));  // Output: false


//################################################################################################################


console.log('%cTask 2 :#11 - Higher-Order Functions Series - Find the average age', "color:green; font-weight:bold; font-size:14px;");





function getAverageAge(list) {

  const totalAge = list.reduce((sum, developer) => sum + developer.age, 0);
  const averageAge = totalAge / list.length;
  return Math.round(averageAge);
}

// Example usage:
var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

console.log(getAverageAge(list1)); // Output: 50




//################################################################################################################


console.log('%cTask 3 :#8 - Higher-Order Functions Series - Will all continents be represented?', "color:green; font-weight:bold; font-size:14px;");




function allContinents(list) {
  // Define the required continents
  const requiredContinents = new Set(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']);
  
  // Create a new set to keep track of the continents that are represented
  const representedContinents = new Set();
  
  // Iterate through the list of developers
  list.forEach(dev => {
    representedContinents.add(dev.continent);
  });
  
  // Check if all required continents are represented
  for (let continent of requiredContinents) {
    if (!representedContinents.has(continent)) {
      return false;
    }
  }
  
  return true;
}

// Example usage:
var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
];

console.log(allContinents(list1)); // true




//################################################################################################################


console.log('%cTask 4 : #6 - Higher-Order Functions Series - Can they code in the same language?', "color:green; font-weight:bold; font-size:14px;");





function isSameLanguage(list) {
  // Get the language of the first developer
  const firstLanguage = list[0].language;

  // Check if every developer's language is the same as the first one
  return list.every(dev => dev.language === firstLanguage);
}

//In this example, all developers code in JavaScript, so the function returns true.
var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

console.log(isSameLanguage(list1)); // true


//In this case, the function returns false because not all developers code in the same language.
var list2 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'Python' },
];

console.log(isSameLanguage(list2)); // false
