console.log('%cMathew Samir', "color:green; font-weight:bold; font-size:17px;");
console.log('%cTask 1 :Coding Meetup #10 - Higher-Order Functions Series - Create usernames', "color:green; font-weight:bold; font-size:14px;");



// ### Task 1 :Coding Meetup #10 - Higher-Order Functions Series - Create usernames ###



function addUsername(list) {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return list.map(developer => {
    const birthYear = currentYear - developer.age; // Calculate birth year
    const username = developer.firstName.toLowerCase() + developer.lastName[0].toLowerCase() + birthYear;
    
    return { ...developer, username: username }; // Return developer with new username
  });
}

var list = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

console.log(addUsername(list));


////////////////////////////////////////////////////////
