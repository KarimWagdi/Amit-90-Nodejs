var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 5;
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
function calcAge(age, name) {
    console.log("this person is ".concat(age, "years old and his name is ").concat(name));
}
function calcAge1(age, name) {
    console.log("this person is ".concat(age, "years old and his name is ").concat(name));
    return age;
}
function calcAge2(age, name) {
    console.log("this person is ".concat(age, "years old and his name is ").concat(name));
    return name;
}
function calcAge3(age, name) {
    console.log("this person is ".concat(age, "years old and his name is ").concat(name));
    return true;
}
function calcAge4(age, name) {
    console.log("this person is ".concat(age, "years old and his name is ").concat(name));
    throw new Error;
}
// calcAge(122, "name")
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Person.prototype.calcAge = function () {
        return this.age;
    };
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old"));
    };
    Person.prototype.add = function (a, b) {
        return a + b;
    };
    return Person;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, department) {
        var _this = _super.call(this, name, age) || this;
        _this.department = department;
        _this.department = department;
        return _this;
    }
    Admin.prototype.greet = function () {
        _super.prototype.greet.call(this);
        console.log("I work in ".concat(this.department, " department"));
    };
    return Admin;
}(Person));
var data = new Admin("wagdi", 30, "admin");
// let department = new Person("wagdiii",122)
// department.
data.greet();
