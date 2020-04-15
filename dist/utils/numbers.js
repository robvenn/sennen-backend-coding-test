"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = (min, max, numDigits) => {
    const rnd = min + (Math.random() * (max - min));
    return Number(rnd.toFixed(numDigits));
};
//# sourceMappingURL=numbers.js.map