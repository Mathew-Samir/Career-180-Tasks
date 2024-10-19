console.log("%cImplementation Mixins for code resuability", "color:green ; font-size: 16px");

// Flyable Mixin
const Flyable = {
  fly() {
    console.log(`${this.name} is flying!`);
  },
  
  land() {
    console.log(`${this.name} is landing.`);
  }
};

// Powered Mixin
const Powered = {
  powerUp() {
    console.log(`${this.name} is powering up!`);
  },
  
  powerDown() {
    console.log(`${this.name} is powering down.`);
  }
};

// Utility function to apply a single mixin to a class
function applyMixin(targetClass, mixin) {
  Object.keys(mixin).forEach(key => {
    targetClass.prototype[key] = mixin[key];
  });
}

// Utility function to apply multiple mixins to a class
function applyMixins(targetClass, ...mixins) {
  mixins.forEach(mixin => applyMixin(targetClass, mixin));
}

// Classes that will use the mixins
class Bird {
  constructor(name) {
    this.name = name;
  }
}

class Airplane {
  constructor(name) {
    this.name = name;
  }
}

class Superhero {
  constructor(name) {
    this.name = name;
  }
}

// Applying mixins to the classes
applyMixin(Bird, Flyable);
applyMixin(Airplane, Flyable);
applyMixins(Superhero, Flyable, Powered);
// Creating instances of the classes
const sparrow = new Bird('Sparrow');
const boeing747 = new Airplane('Boeing 747');
const superman = new Superhero('Superman');

// Using the mixin methods on different class instances
sparrow.fly();
sparrow.land();

boeing747.fly();
boeing747.land();

superman.fly();
superman.land();
superman.powerUp();
superman.powerDown();
