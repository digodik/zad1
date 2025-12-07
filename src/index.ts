import { isStrongPassword } from "./tasks/task2/task2";

console.log("Password tests:");
console.log("qwerty   →", isStrongPassword("qwerty"));
console.log("Qwerty12 →", isStrongPassword("Qwerty12"));
console.log("12345678 →", isStrongPassword("12345678"));
console.log("HELLO123 →", isStrongPassword("HELLO123"));
console.log("weakPASS1 →", isStrongPassword("weakPASS1"));
