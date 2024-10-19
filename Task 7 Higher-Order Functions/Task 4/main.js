console.log('%cMathew Samir', "color:green; font-weight:bold; font-size:17px;");
console.log('%cTask 4 :Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer', "color:green; font-weight:bold; font-size:14px;");
// ### Task 4 :Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer ###



function findSenior(list) {
  // Step 1: Find the maximum age
  const maxAge = Math.max(...list.map(dev => dev.age));
  
  // Step 2: Filter the list for developers with the maximum age
  return list.filter(dev => dev.age === maxAge);
}

var list = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

console.log(findSenior(list));




////////////////////////////////////////////////////////
