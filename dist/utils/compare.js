"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
exports.getResultWithEarliestSunrise = (a, b) => {
    return moment_1.default.min(a.sunrise, b.sunrise) === a.sunrise ? a : b;
};
//# sourceMappingURL=compare.js.map