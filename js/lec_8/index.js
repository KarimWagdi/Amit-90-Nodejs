// // const User = function (firstName, lastName) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;

// // }

// // User.prototype.fullName = function () {
// //     return `${this.firstName} ${this.lastName}`;
// // };

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


// // Admin.calcDate()


// const karim = new Admin("admin", "mohsen", 50, new Date);

// // karim.calcDate(); // error 
// karim.calcAge(); // log 
// Admin.calcDate(); // 2025 
// // Admin.calcAge(); // error
// // console.log(admin);

// // admin.fullName(); // Output: admin admin

// // admin.calcAge(); // Output: admin calc age method called

// // data.fullName(); // Output: karim wagdi


const data =  fetch("https://jsonplaceholder.typicode.com/posts")
   .then(response => response.json())
   .then(data => console.log(data));
console.log(data);