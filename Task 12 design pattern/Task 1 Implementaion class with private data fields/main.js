class Person {
  // Define private fields using the '#' syntax
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  // Private method, only accessible within the class
  #validateAge(age) {
    if (typeof age !== 'number' || age <= 0) {
      throw new Error('Age must be a positive number');
    }
  }

  // Public getter and setter for firstName
  get firstName() {
    return this.#firstName;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName !== 'string' || newFirstName.length === 0) {
      throw new Error('Invalid first name');
    }
    this.#firstName = newFirstName;
  }

  // Public getter and setter for lastName
  get lastName() {
    return this.#lastName;
  }

  set lastName(newLastName) {
    if (typeof newLastName !== 'string' || newLastName.length === 0) {
      throw new Error('Invalid last name');
    }
    this.#lastName = newLastName;
  }

  // Public getter and setter for age with validation
  get age() {
    return this.#age;
  }

  set age(newAge) {
    this.#validateAge(newAge);
    this.#age = newAge;
  }

  // Public method that uses private data and methods
  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }
}

// Usage example
const person = new Person('Mathew', 'Samir', 23);


console.log(person.firstName); 
person.firstName = 'Mathew';
console.log(person.getFullName());

try {
  person.age = -5; 
} catch (e) {
  console.error(e.message);
}
