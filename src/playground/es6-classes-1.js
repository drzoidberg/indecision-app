class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreetting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }

}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreetting() {
        let greeting = super.getGreetting();

        if (this.hasHomeLocation()) {
            return greeting += ` I'm visiting from ${this.homeLocation}.`
        }

        return greeting;
    }
}

const me = new Student('Jorge', 34, 'Grafica Publicitaria');
const him = new Traveler('Jorge', 34, 'Alcoi');
const other = new Traveler(undefined, undefined, 'nowhere');
console.log(him.getGreetting());
console.log(other.getGreetting());

