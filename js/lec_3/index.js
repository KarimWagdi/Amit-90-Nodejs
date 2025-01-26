
const task = ['a', 'b', 'c','d']

// method 1
let x = ''
for (let i = task.length-1 ; i >= 0 ; i--) {
   x = x + task[i]
}
console.log(x);



let data = {
    firstName: "karim",
    lastName: "wagdulla",
    age: 28,
    city: "karachi",
    hobbies: ["reading", "painting", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: 12345
    }
}

data.asdfasdfasdf= 'dasfasdfasdfasdfasd'

console.log(data);

console.log(data.hobbies[2]);

// method 2
// const arr = ["w", "3", "r", "e", "s", "o", "u", "r", "c", "e"];

// const rev = arr.reverse();
// const string_c = rev.join("");
// console.log(string_c);

// // before the faslaka

// const rotating_overThe_Time = function (string_c, rev) {
//   if (rev) {
//     arr.unshift(arr.pop());
//   } else {
//     arr.push(arr.shift());
//   }
//   return arr;
// };
// console.log(rotating_overThe_Time(string_c, rev))
// // Rotate String 'w3resource' Periodically