let name = "Arcon";
let age = 25;
let grade = 90;

let  fruits = ["Apple", "Banana", "Mango"];
let colors = ["Red", "Blue", "Green"];
let subjects = ["Math", "English", "Science"];

if (age >= 25) {
    console.log(name + " is an adult.");
}

if (grade >= 75) {
    console.log("You Passed!");
}

if (grade >= 90) {
    console.log("Excellent grade!");
} else {
    console.log("Keep studying!");
}

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit: " + fruits[i]);   
}

for (let i = 0; i < colors.length; i++) {
    console.log("Color: " + colors[i]);   
}

for (let i = 0; i < subjects.length; i++) {
    console.log("Subject: " + subjects[i]);
}