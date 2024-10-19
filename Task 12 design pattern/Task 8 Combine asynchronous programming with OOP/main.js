// Simulating an API call
function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate API success or failure
      const success = Math.random() > 0.3; 
      if (success) {
        resolve({ data: "Some fetched data" });
      } else {
        reject(new Error("Failed to fetch data from API"));
      }
    }, 1000);
  });
}

// Class to handle asynchronous operations
class APIHandler {
  constructor() {
    this.data = null;
    this.error = null;
  }

  // Asynchronously fetch data and handle the result
  async fetchData() {
    try {
      console.log("Fetching data...");
      const response = await fetchDataFromAPI();
      this.data = response.data;
      console.log("Data fetched successfully:", this.data);
    } catch (error) {
      this.error = error;
      console.error("Error occurred during fetch:", error.message);
    }
  }

  // Simulate another async operation, like saving data to the server
  async saveData() {
    if (!this.data) {
      console.error("No data to save!");
      return;
    }

    try {
      console.log("Saving data...");
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve("Data saved successfully!"), 1000)
      ); // Simulating save operation with a delay
      console.log(response);
    } catch (error) {
      console.error("Error while saving data:", error.message);
    }
  }
}

// Class to manage state asynchronously
class StateManager {
  constructor(initialState) {
    this.state = initialState;
  }

  // Asynchronously update the state
  async updateState(newState) {
    console.log("Updating state...");
    return new Promise((resolve) => {
      setTimeout(() => {
        this.state = { ...this.state, ...newState };
        resolve(this.state);
        console.log("State updated:", this.state);
      }, 500); // Simulating a 500ms delay for state update
    });
  }

  getState() {
    return this.state;
  }
}

(async () => {
  const apiHandler = new APIHandler();
  await apiHandler.fetchData();
  await apiHandler.saveData();

  const stateManager = new StateManager({ user: null });
  await stateManager.updateState({ user: "John Doe" });
  console.log("Final state:", stateManager.getState());
})();
