// // let arr = [1,2]
// // // let x = arr[0]
// // // let y = arr[1]
// // // arr = [y, x]
// // console.log(arr);

// // let [x,y] = arr

// // arr = [y, x]

// // console.log(arr);

// function test(...args) {
//     console.log(args);
// }


// let arr = [1, 2 , 3 , 4, 5, 12]
// let arr_1 = ["name", "name2 ", "name3", "name4"]
// // let x = arr[0]
// // let y = arr[4]
// // let z = arr[8]
// let data = [...arr_1, ...arr]
// // console.log(x,y,z);

// // let [a, , , , ,[c, , b]] = arr

// // console.log(a, b, c);
// // console.log(data);
// test(...data)

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
        sun:{
            start: "09:00",
            end: "16:00"
        },
    },

    functionLogger : (x) => {
        console.log(`my name is ${this.name} and my age is ${this.age} and i am living in ${this.city},
             my favorite sport is ${x} and working on ${this.workingHours}`);
    }
}

// let data =[ ...person.favFood, ...person.favSports] 

// console.log(data);




// console.log(start);
let x = person.favSports[0]
person.functionLogger(x)










