"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task6_1 = require("./tasks/task6/task6");
const lines = [
    "Milk - 42.5",
    "Bread - 25",
    "Cheese - 70.2",
    "Butter - 55",
];
const products = lines.map(task6_1.parseProduct);
console.log("Parsed products:", products);
const total = (0, task6_1.calcTotal)(products);
console.log("Total price:", total);
