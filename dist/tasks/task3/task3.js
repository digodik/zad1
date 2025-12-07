"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumPositive = sumPositive;
exports.filterEven = filterEven;
function sumPositive(nums) {
    return nums
        .filter(n => n > 0)
        .reduce((sum, n) => sum + n, 0);
}
function filterEven(nums) {
    return nums.filter(n => n % 2 === 0);
}
