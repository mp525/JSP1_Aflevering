class Person {
    constructor(age,name){
        this._age = age;
        this._name = name;
    }

     info(){
        return `${this._name}, ${this._age}`
    }

     set age(val){
        this._age = val;
    }

     set name(val){
        this._name = val;
    }

    get age(){
        return this._age;
    }
    get name(){
        return this._name;
    }

};

var p1 = new Person(10, "Kim");
var p2 = new Person(20, "Jonas");
console.log(p1.info());
console.log(p2.info());
console.log();

p1.age = 11;
p2.age = 21;
p1.name = "Hans";
p2.name = "Signe";

console.log(`${p1.name}, ${p1.age}`);
console.log(`${p2.name}, ${p2.age}`);