"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMinGrade = getMinGrade;
exports.getMaxGrade = getMaxGrade;
exports.getAverageGrade = getAverageGrade;
function getMinGrade(grades) {
    return Math.min(...grades);
}
function getMaxGrade(grades) {
    return Math.max(...grades);
}
function getAverageGrade(grades) {
    if (grades.length === 0)
        return 0;
    const sum = grades.reduce((a, b) => a + b, 0);
    return sum / grades.length;
}
