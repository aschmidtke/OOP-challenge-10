class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = Math.floor(Math.random() * 2 + 3);
        this.email = 'Steve@steve.com';
    }

    getName() {
        return this.name;
    }
    
    getID() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;