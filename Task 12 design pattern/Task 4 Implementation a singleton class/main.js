class Singleton {
    static instance = null;

    constructor(data) {
        if (Singleton.instance) {
            throw new Error("You can only create one instance of Singleton!");
        }
        this.data = data;
        Singleton.instance = this;
    }

    static getInstance(data) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(data);
        }
        return Singleton.instance; 
    }

    // Getter and setter methods for encapsulation
    getData() {
        return this.data;
    }

    setData(newData) {
        this.data = newData;
    }
}

try {
    const singleton1 = Singleton.getInstance('Initial data');
    console.log(singleton1.getData());

    singleton1.setData('Updated data');
    console.log(singleton1.getData());

    const singleton2 = Singleton.getInstance();
    console.log(singleton2.getData());
    console.log(singleton1 === singleton2);
    
} catch (error) {
    console.error(error.message);
}
