class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // fullName(){
    //     console.log(`${this.firstName} ${this.lastName}`);
    // }

    // static fullData(){
    //     console.log('static fullName method called');
    // }
}

class Admin extends User {
    constructor(firstName, lastName, age, department){
        super(firstName, lastName, age);
        this.department = department;
    }
}

const adminData = new Admin();