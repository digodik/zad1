"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeSentence = normalizeSentence;
exports.countWords = countWords;
function normalizeSentence(text) {
    return text.trim().toLowerCase().replace(/\s+/g, ' ');
}
function countWords(text) {
    const normalized = normalizeSentence(text);
    if (!normalized)
        return 0;
    return normalized.split(' ').length;
}
