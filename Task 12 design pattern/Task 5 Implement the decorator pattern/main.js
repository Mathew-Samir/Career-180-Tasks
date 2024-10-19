// Base User Class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Decorator to add logging behavior
function withLogging(user) {
  const originalSayHello = user.sayHello;

  user.sayHello = function () {
    console.log(`[LOG]: Calling sayHello for ${user.name}`);
    originalSayHello.apply(user, arguments);
  };

  return user;
}

// Decorator to add validation behavior
function withValidation(user) {
  const originalSayHello = user.sayHello;

  user.sayHello = function () {
    if (!user.name || user.age < 0) {
      console.log('[ERROR]: Invalid user data.');
      return;
    }
    originalSayHello.apply(user, arguments);
  };

  return user;
}

// Create a User instance
let user = new User('Mathew', 23);

// Apply the logging decorator
user = withLogging(user);

// Apply the validation decorator
user = withValidation(user);

user.sayHello();

let invalidUser = new User('', -5);
invalidUser = withLogging(invalidUser);
invalidUser = withValidation(invalidUser);
invalidUser.sayHello(); 
