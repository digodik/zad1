import { Student, getMinGrade, getMaxGrade, getAverageGrade } from "./tasks/task7/task7";

const students: Student[] = [
  { name: "Roman", grades: [90, 75, 88, 92] },
  { name: "Anna", grades: [85, 95, 78, 80, 88] },
];

students.forEach(s => {
  console.log(`Student: ${s.name}`);
  console.log("Grades:", s.grades);
  console.log("Min:", getMinGrade(s.grades));
  console.log("Max:", getMaxGrade(s.grades));
  console.log("Average:", getAverageGrade(s.grades).toFixed(2));
  console.log("------------------------");
});
