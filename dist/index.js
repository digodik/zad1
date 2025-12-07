"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task3_1 = require("./tasks/task3/task3");
const numbers = [3, -1, 4, 0, 10, -5];
console.log("Original array:", numbers);
console.log("Sum of positive numbers:", (0, task3_1.sumPositive)(numbers));
console.log("Even numbers:", (0, task3_1.filterEven)(numbers));
