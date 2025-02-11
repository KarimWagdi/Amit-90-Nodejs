// logical operators
// && || 
// console.log( 3 || "name");
// console.log( 0 || "value");
// console.log( true || 0);
// console.log( true || 1);
// console.log( undefined || null);
// console.log(false ||  undefined || null || 0 ||  ''); // ''
// console.log(false ||  undefined||  8  || null || 0 ||  ''); // 8

// let age = 12 
// let fName = 'WAGDI'
// let data = true
// if(age == 12 && fName == 'WAGDI' && data == true ){
//     console.log('Welcome from and operator');
// } 
// if(age == 12 || fName == 'WAGDI' || data == true ){
//     console.log('Welcome from or operator');
// }
// console.log( 8 && 'name' && true ); // true
// console.log(true && 'name'); // 'name' 
// console.log(false && 'name'); // false
// console.log(undefined && 'name'); // undefined
// console.log(null && undefined)  // null


// let price =  0 
// console.log( price || 'no price for this item');

// 0 , '' => false != 

// nullish  ?? 

// null || undefined => false
// 0 , '' => true

// falsy values => 0, ' ', null, undefined , nan => false

// ?? => false => null, undefined 

// ?? => 0, '' => true

let person = {
    name: "John",
    age: 25,
    city: "New York",
    favSports: ["gym","football","shooting"],
    favFood: ["food1","food2","food3","food4"],
    workingHours:{
        sat:{
            start: "08:00",
            end: "17:00"
        },
        Sun:{
            start: "09:00",
            end: "16:00"
        },
    },

    functionLogger : (x) => {
        console.log(`my name is ${this.name} and my age is ${this.age} and i am living in ${this.city},
             my favorite sport is ${x} and working on ${this.workingHours}`);
    }
}

// console.log(person.name);
// console.log(person.aged);

// console.log(person.workingHours.mon?.start);

// const data = person.workingHours.mon ? person.workingHours.mon.start : undefined;

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May']

const days = ['Sun', 'Mon', 'Tue', 'Wed']

// for (let i = 0; i < month.length; i ++){
//     console.log(month[i]);
// }

// for (const mon of month) {
//     console.log(mon);
// // }

// for (const [i, el] of days.entries()){
//     // console.log(day);
//     console.log(`${i + 1} : ${el}`);
//     // const work = person.workingHours[day]?.start || 'break'
//     // console.log(`${day}: ${work}`);
// }

const data_1 = Object.keys(person)
console.log(data_1);
const data_2 = Object.values(person)
console.log(data_2);
const data_3 = Object.entries(person)
console.log(data_3);