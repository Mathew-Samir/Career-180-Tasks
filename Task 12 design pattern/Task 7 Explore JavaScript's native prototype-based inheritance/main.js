// Step 1: Create a prototype object
const vehiclePrototype = {
    type: 'vehicle',
    start() {
        return `The ${this.type} is starting.`;
    },
    stop() {
        return `The ${this.type} is stopping.`;
    }
};

// Step 2: Create a new object using the prototype
const car = Object.create(vehiclePrototype);

// Step 3: Override properties/methods on the new object
car.type = 'car';

car.honk = function() {
    return `The ${this.type} is honking.`;
};

// Step 4: Create another object based on the same prototype
const motorcycle = Object.create(vehiclePrototype);
motorcycle.type = 'motorcycle';

// Step 5: Demonstrate efficient memory usage and prototypal inheritance
console.log(car.start());
console.log(car.honk());
console.log(motorcycle.start());

console.log(vehiclePrototype.start === car.start); 
console.log(vehiclePrototype.start === motorcycle.start);

console.log(typeof car.honk);
console.log(typeof motorcycle.honk);
