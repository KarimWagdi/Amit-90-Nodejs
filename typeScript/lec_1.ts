let x = 5 
// x = "name "

// let y 
// y= 5
// y= true 
// y= "sdasdas"


// let y : number

// let user = {
//     name: "John Doe",
//     age: 30,
//     collage: "Cairo UNI"
// }

// user.data = "gshasjhhs"

// console.log(user.data);

function calcAge(age: number, name : string) : void {
    console.log(`this person is ${age}years old and his name is ${name}`);
     
}
function calcAge1(age: number, name : string) : number {
    console.log(`this person is ${age}years old and his name is ${name}`);
     return age
}
function calcAge2(age: number, name : string) : string {
    console.log(`this person is ${age}years old and his name is ${name}`);
     return name;
}
function calcAge3(age: number, name : string) : boolean {
    console.log(`this person is ${age}years old and his name is ${name}`);
     return true
}
function calcAge4(age: number, name : string) : never {
    console.log(`this person is ${age}years old and his name is ${name}`);
     throw new Error
}

// calcAge(122, "name")

class Person {
    constructor(public name: string, public age: number) {
        this.name = name
        this.age = age
    }

    public calcAge(): number {
        return this.age
    }

    protected greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }

    private add(a: number, b: number): number {
        return a + b
    }
}

class Admin extends Person {
    constructor(name: string, age: number, public department: string) {
        super(name, age)
        this.department = department
    }
    
     greet(): void {
        super.greet()
        console.log(`I work in ${this.department} department`)
    }
}


// let data = new Admin("wagdi", 30, "admin")
// let department = new Person("wagdiii",122)
// department.
// data.greet()

const arr : number[] = [1,4,6,7]

const srtArr : (string | number)[] = ["adas", 'asdas', 'asdas', 'asdas', 'asdas',1,4,6,8]

interface Data {
    name: string;
    age: number;
}
const sum : Data[] = [{name: "asfsda", age: 12}, { name: "sdfsdfsdf" , age: 22}]

const fun = function(obj: Data) {
    console.log(`Hello, my name is ${obj.name} and I am ${obj.age} years old`)
}

fun(sum[0])