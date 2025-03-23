import name from '../lec_9/script';

console.log(name);

// // // const User = function (firstName, lastName) {
// // //     this.firstName = firstName;
// // //     this.lastName = lastName;

// // // }

// // // User.prototype.fullName = function () {
// // //     return `${this.firstName} ${this.lastName}`;
// // // };

// class User {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     fullName(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }


// class Admin extends User{
//     constructor(firstName, lastName, age, date){
//         super(firstName, lastName, age);
//         this.date = new Date(date);
//     }

//     calcAge(){
//         console.log('admin calc age method called');
//     }
    
//     static calcDate(){
//         const currentDate = new Date();
//         const diff = currentDate.getFullYear() 
//         console.log( diff);
//     }
// }


// // // Admin.calcDate()


// // const karim = new Admin("admin", "mohsen", 50, new Date);

// // karim.calcDate(); // 
// // karim.calcAge(); // data
// // Admin.calcDate(); // 
// // Admin.calcAge(); // 
// // // console.log(admin);

// // // admin.fullName(); // Output: admin admin

// // // admin.calcAge(); // Output: admin calc age method called

// // // data.fullName(); // Output: karim wagdi


// const data =  fetch("https://jsonplaceholder.typicode.com/posts")
//    .then(response => response.json())
//    .then(data => console.log(data));
// console.log(data);


//classical 
// class => instance as just a copy and don't have any link with the class  
// instantiation 

// js
// constructor function  && class  
// delegation: still have link with the class itself  {prototype}


// const User = function (firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

// }

// const userData = new User('firstName', 'lastName');
// new {} is created 
// function is called and make this = {}
// link {} to the prototype 
// constructor function automatically returns the obj 

// console.log(userData);
// User.prototype.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };

class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }

    static fullData(){
        console.log('static fullName method called');
    }
}
const userData = new User('firstName', 'lastName', 50);
// console.log(User.fullName());
// userData.fullName()
// userData.fullData()
User.fullData()