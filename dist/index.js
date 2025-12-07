"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task7_1 = require("./tasks/task7/task7");
const students = [
    { name: "Roman", grades: [90, 75, 88, 92] },
    { name: "Anna", grades: [85, 95, 78, 80, 88] },
];
students.forEach(s => {
    console.log(`Student: ${s.name}`);
    console.log("Grades:", s.grades);
    console.log("Min:", (0, task7_1.getMinGrade)(s.grades));
    console.log("Max:", (0, task7_1.getMaxGrade)(s.grades));
    console.log("Average:", (0, task7_1.getAverageGrade)(s.grades).toFixed(2));
    console.log("------------------------");
});
