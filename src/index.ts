import { parseProduct, calcTotal } from "./tasks/task6/task6";


const lines = [
  "Milk - 42.5",
  "Bread - 25",
  "Cheese - 70.2",
  "Butter - 55",
];

const products = lines.map(parseProduct);
console.log("Parsed products:", products);

const total = calcTotal(products);
console.log("Total price:", total);
