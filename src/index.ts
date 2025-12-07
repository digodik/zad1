import { normalizeSentence, countWords } from "./tasks/task5/task5";

// Примеры строк
const sentence1 = " Hello world from TypeScript ";
const sentence2 = "   Multiple     spaces   here  ";

console.log("Normalized 1:", normalizeSentence(sentence1));
console.log("Word count 1:", countWords(sentence1));

console.log("Normalized 2:", normalizeSentence(sentence2));
console.log("Word count 2:", countWords(sentence2));
