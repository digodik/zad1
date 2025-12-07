"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task2_1 = require("./tasks/task2/task2");
console.log("Password tests:");
console.log("qwerty   →", (0, task2_1.isStrongPassword)("qwerty"));
console.log("Qwerty12 →", (0, task2_1.isStrongPassword)("Qwerty12"));
console.log("12345678 →", (0, task2_1.isStrongPassword)("12345678"));
console.log("HELLO123 →", (0, task2_1.isStrongPassword)("HELLO123"));
console.log("weakPASS1 →", (0, task2_1.isStrongPassword)("weakPASS1"));
