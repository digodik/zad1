"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task4_1 = require("./tasks/task4/task4");
(0, task4_1.addContact)("vaska", "+380501234567");
(0, task4_1.addContact)("Ivan", "+380987654321");
(0, task4_1.addContact)("petka", "+380631112233");
const found = (0, task4_1.findContactByName)("Ivan");
console.log("Found contact:", found);
(0, task4_1.listContacts)();
