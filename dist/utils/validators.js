"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = __importDefault(require("ramda"));
/*
 * returns true if value is a number, or otherwise false
 */
exports.isNumber = ramda_1.default.is(Number);
/*
 * Validates if a value is a number
 */
exports.validateNumber = (value) => {
    if (!exports.isNumber(value)) {
        throw new TypeError(`Value ${value} must be a number, got ${typeof (value)}`);
    }
};
/*
 * validate if a number equals or is between min and max values
 */
exports.validateNumberBetween = (value, min, max) => {
    exports.validateNumber(value);
    if (value < min || value > max) {
        throw new RangeError(`value must be between ${min} and ${max}, got: ${value}`);
    }
};
//# sourceMappingURL=validators.js.map