let school = "Northwest Samar State University";
let year = 2026;
let studentsCount = 3;

let students = ["Kiko", "Ace", "Justin"];
let grades = [90, 85 , 75];
let courses = ["JavaScript", "Database", "Networking"];

const schoolInfo = { 
    name: "Northwest Samar State University",
    location: "Calbayog City"
};

const courseInfo = {
    name: "Computer Science",
    units: "3"
};

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;  
    }

    introduce() {
        return `I am ${this.name}, ${this.age} years old.`;  
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this._grade = grade;
    }

    getGrade() {
        return this._grade;
    }

    study() {
        return `${this.name} is studying Javascript.`;  
    }
}

class Teacher extends Person {
    teach() {
        return `${this.name} is teaching.`;
    }
}

class Course {
    constructor(name, units) {
        this.name = name;
        this._units = units;
    }

    getUnits() {
        return this._units;
    }

    getCourseInfo() {
        return `${this.name} - ${this._units} units`;
    }
}

let student1 = new Student("Shera", 20, 90);
let student2 = new Student("Kenen", 21, 85);
let teacher1 = new Teacher("Mr. Concon", 35);
let course1 = new Course("Javascript", 3);

if (student1.getGrade() >= 75) {
    console.log("Shera passed!");
} else {
    console.log("Shera failed.");
}

if (student2.getGrade() >= 90) {
    console.log("Kenen has an excellent grade!");
} else if (student2.getGrade() >= 75) {
    console.log("Kenen Passed!");
} else {
    console.log("Kenen failed.");
}

if (course1.getUnits() >= 3) {
    console.log("This is a regular course.");
} else {
    console.log("This is a short course.");
}

for (let i = 0; i < students.length; i++) {
    console.log("Student:", students[i]); 
}

for (let grade of grades) {
    console.log("Grade:", grade);
}

courses.forEach(function(c) {
    console.log("Course:", c);
});

console.log(student1.introduce());
console.log(student1.study());
console.log(teacher1.teach());
console.log(course1.getCourseInfo());




