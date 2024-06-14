var Human = /** @class */ (function () {
    function Human(name, gender, age, isHuman) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.isHuman = isHuman;
    }
    Human.prototype.person = function () {
        return ('Hi my name is ' + this.name + ' and i am a ' + this.gender + 'AND i am a ' + this.isHuman);
    };
    return Human;
}());
var people = new Human('bite', 'nale', 11, true);
// console.log(people);
console.log(people.person());
