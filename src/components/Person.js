function Person(name, age) {
    this.name = name;
    this.age = age;
    this.walk = function() {
        return this.name + ' is walking.';
    }
}
Person.prototype.run = function() {
    return this.name + ' is running at age ' + this.age;
}

export default Person;
