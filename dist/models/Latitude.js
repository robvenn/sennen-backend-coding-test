"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.LATITUDE_MIN_VALUE = -90;
exports.LATITUDE_MAX_VALUE = 90;
class Latitude {
    constructor(value) {
        utils_1.validateNumberBetween(value, exports.LATITUDE_MIN_VALUE, exports.LATITUDE_MAX_VALUE);
        this.value = value;
    }
    toString() {
        return `${this.value}`;
    }
}
exports.default = Latitude;
Latitude.MIN = exports.LATITUDE_MIN_VALUE;
Latitude.MAX = exports.LATITUDE_MAX_VALUE;
//# sourceMappingURL=Latitude.js.map