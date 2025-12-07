"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseProduct = parseProduct;
exports.calcTotal = calcTotal;
function parseProduct(line) {
    const [title, priceStr] = line.split(" - ");
    return {
        title: title.trim(),
        price: parseFloat(priceStr),
    };
}
function calcTotal(products) {
    return products.reduce((sum, p) => sum + p.price, 0);
}
