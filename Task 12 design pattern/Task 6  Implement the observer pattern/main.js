// The Stock class is the "subject" being observed.
class Stock {
  constructor(symbol, price) {
    this.symbol = symbol;
    this.price = price;
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Notify all observers of a price change
  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this);
    }
  }

  // Set a new price for the stock and notify observers
  setPrice(newPrice) {
    console.log(`Stock ${this.symbol} is changing from $${this.price} to $${newPrice}`);
    this.price = newPrice;
    this.notifyObservers();
  }
}

// The Investor class is the "observer"
class Investor {
  constructor(name) {
    this.name = name;
  }

  // The update method is called when the stock price changes
  update(stock) {
    console.log(`Notifying ${this.name}: The price of ${stock.symbol} has changed to $${stock.price}`);
  }
}


const appleStock = new Stock('AAPL', 150);

// Create investors (observers)
const investor1 = new Investor('Alice');
const investor2 = new Investor('Bob');

// Register the observers (investors) to the stock
appleStock.addObserver(investor1);
appleStock.addObserver(investor2);

// Change the stock price and notify investors
appleStock.setPrice(155);
appleStock.setPrice(160);

// Remove an observer and update the stock price again
appleStock.removeObserver(investor1);
appleStock.setPrice(165);
