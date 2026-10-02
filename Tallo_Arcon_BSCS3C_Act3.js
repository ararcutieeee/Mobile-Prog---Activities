// 10 LET VARIABLES
let studentName = "Arcon";
let studentAge = 20;
let course = "BS Information Technology";
let yearLevel = 2;
let studyHours = 3;
let completedTasks = 4;
let pendingTasks = 3;
let favoriteSubject = "Programming";
let currentAverage = 89;
let readyForExam = true;

// 10 CONST VARIABLES
const school = "Sample State University";
const section = "BSIT 2A";
const semester = "First Semester";
const schoolYear = "2026-2027";
const passingGrade = 75;
const studyGoal = 4;
const subjects = ["Programming", "Database", "Networking", "Web Development"];
const grades = [92, 88, 85, 91];
const tasks = ["Finish activity", "Review notes", "Practice coding"];
const student = {
    name: studentName,
    age: studentAge,
    course: course
};

// 5 ARROW FUNCTIONS
const greetStudent = (name) => `Welcome, ${name}!`;

const getRemark = (grade) =>
    grade >= passingGrade ? "Passed" : "Failed";

const getAverage = (scores) =>
    scores.reduce((total, score) => total + score, 0) / scores.length;

const getRemainingHours = (hours, goal) =>
    Math.max(goal - hours, 0);

const formatTask = (task, index) =>
    `${index + 1}. ${task}`;

// 3 DESTRUCTURED ARRAYS
const [firstSubject, secondSubject] = subjects;
const [firstGrade, secondGrade, thirdGrade] = grades;
const [firstTask, secondTask, thirdTask] = tasks;

// 3 OBJECT LITERALS
const studentDetails = {
    fullName: studentName,
    studentCourse: course,
    studentSection: section
};

const studyDetails = {
    hours: studyHours,
    goal: studyGoal,
    ready: readyForExam
};

const gradeDetails = {
    average: currentAverage,
    highest: 92,
    lowest: 85
};

// 3 DESTRUCTURED OBJECT LITERALS
const { fullName, studentCourse, studentSection } = studentDetails;
const { hours, goal, ready } = studyDetails;
const { average, highest, lowest } = gradeDetails;

// 2 ARRAYS USING SPREAD OPERATORS
const updatedSubjects = [
    ...subjects,
    "Data Structures",
    "Operating Systems"
];

const updatedTasks = [
    ...tasks,
    "Prepare for quiz",
    "Submit project"
];

// 2 OBJECT LITERALS USING SPREAD OPERATORS
const completeStudent = {
    ...student,
    section: section,
    school: school
};

const academicRecord = {
    ...gradeDetails,
    semester: semester,
    status: getRemark(currentAverage)
};

// 2 ARRAYS USING .map()
const subjectList = updatedSubjects.map(
    (subject, index) => `${index + 1}. ${subject}`
);

const gradeRemarks = grades.map(
    (grade) => `${grade} - ${getRemark(grade)}`
);

// 2 ARRAYS USING .filter()
const highGrades = grades.filter(
    (grade) => grade >= 90
);

const longTasks = updatedTasks.filter(
    (task) => task.length > 12
);

// 2 OBJECT LITERALS FOR OPTIONAL CHAINING
const adviser = {
    name: "Mr. Johnson",
    contact: {
        email: "johnson@example.com"
    }
};

const classroom = {
    building: "Technology Building",
    room: {
        number: "Laboratory 2"
    }
};

// OPTIONAL CHAINING
const adviserEmail =
    adviser?.contact?.email ?? "No email available";

const classroomNumber =
    classroom?.room?.number ?? "No room assigned";

// 10 OR MORE TEMPLATE LITERALS
console.log(`${greetStudent(studentName)}`);
console.log(`Name: ${fullName}`);
console.log(`Age: ${studentAge}`);
console.log(`School: ${school}`);
console.log(`Course: ${studentCourse}`);
console.log(`Section: ${studentSection}`);
console.log(`Year Level: ${yearLevel}`);
console.log(`Semester: ${semester}`);
console.log(`School Year: ${schoolYear}`);
console.log(`Favorite Subject: ${favoriteSubject}`);
console.log(`First Subjects: ${firstSubject} and ${secondSubject}`);
console.log(`First Three Grades: ${firstGrade}, ${secondGrade}, and ${thirdGrade}`);
console.log(`Average Grade: ${getAverage(grades).toFixed(2)}`);
console.log(`Status: ${getRemark(average)}`);
console.log(`Study Hours: ${hours} out of ${goal}`);
console.log(`Remaining Hours: ${getRemainingHours(hours, goal)}`);
console.log(`Completed Tasks: ${completedTasks}`);
console.log(`Pending Tasks: ${pendingTasks}`);
console.log(`Selected Tasks: ${firstTask}, ${secondTask}, and ${thirdTask}`);
console.log(`Highest Grade: ${highest}`);
console.log(`Lowest Grade: ${lowest}`);
console.log(`Ready for Exam: ${ready ? "Yes" : "No"}`);
console.log(`Adviser Email: ${adviserEmail}`);
console.log(`Classroom: ${classroomNumber}`);

console.log("\nSUBJECT LIST:");
subjectList.forEach((subject) => console.log(subject));

console.log("\nTASK LIST:");
updatedTasks
    .map(formatTask)
    .forEach((task) => console.log(task));

console.log("\nGRADE REMARKS:");
gradeRemarks.forEach((result) => console.log(result));

console.log("\nFILTERED GRADES:");
console.log(`Grades 90 and above: ${highGrades.join(", ")}`);

console.log("\nFILTERED TASKS:");
console.log(`Long task names: ${longTasks.join(", ")}`);

console.log("\nSTUDENT PROFILE:");
console.log(completeStudent);

console.log("\nACADEMIC RECORD:");
console.log(academicRecord);
