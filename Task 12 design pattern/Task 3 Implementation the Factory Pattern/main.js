console.log("%cImplementation the Factory Pattern", "color:green ; font-size: 16px");

class User {
    constructor(username, role) {
        this.username = username;
        this.role = role;
    }

    getDetails() {
        return `${this.username} is a ${this.role}`;
    }
}

class Admin extends User {
    constructor(username) {
        super(username, 'Admin');
    }

    manageUsers() {
        return `${this.username} can manage all users.`;
    }
}

class Moderator extends User {
    constructor(username) {
        super(username, 'Moderator');
    }

    moderateContent() {
        return `${this.username} can moderate content.`;
    }
}

class Guest extends User {
    constructor(username) {
        super(username, 'Guest');
    }

    viewContent() {
        return `${this.username} can only view content.`;
    }
}

// UserFactory - Responsible for creating user objects using a registry-based approach
class UserFactory {
    constructor() {
        this.userClasses = {};
    }

    // Register a user class with a type
    registerUser(type, userClass) {
        this.userClasses[type] = userClass;
    }

    // Factory method to create users based on type
    createUser(type, username) {
        const UserClass = this.userClasses[type];
        if (UserClass) {
            return new UserClass(username);
        } else {
            throw new Error('Invalid user type');
        }
    }
}

const factory = new UserFactory();

// Register different user types in the factory
factory.registerUser('Admin', Admin);
factory.registerUser('Moderator', Moderator);
factory.registerUser('Guest', Guest);

// Usage Example - Creating different types of users
const admin = factory.createUser('Admin', 'Alice');
console.log(admin.getDetails());
console.log(admin.manageUsers());

const moderator = factory.createUser('Moderator', 'Bob');
console.log(moderator.getDetails());
console.log(moderator.moderateContent());

const guest = factory.createUser('Guest', 'Charlie');
console.log(guest.getDetails());
console.log(guest.viewContent());

// Adding a new user type without modifying the factory
class SuperAdmin extends User {
    constructor(username) {
        super(username, 'SuperAdmin');
    }

    manageEverything() {
        return `${this.username} has all the privileges.`;
    }
}

factory.registerUser('SuperAdmin', SuperAdmin);

const superAdmin = factory.createUser('SuperAdmin', 'Diana');
console.log(superAdmin.getDetails());
console.log(superAdmin.manageEverything());
