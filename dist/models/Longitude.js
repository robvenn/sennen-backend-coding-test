"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.LONGITUDE_MIN_VALUE = -180;
exports.LONGITUDE_MAX_VALUE = 180;
class Longitude {
    constructor(value) {
        utils_1.validateNumberBetween(value, exports.LONGITUDE_MIN_VALUE, exports.LONGITUDE_MAX_VALUE);
        this.value = value;
    }
    toString() {
        return this.value.toString();
    }
}
exports.default = Longitude;
Longitude.MIN = exports.LONGITUDE_MIN_VALUE;
Longitude.MAX = exports.LONGITUDE_MAX_VALUE;
//# sourceMappingURL=Longitude.js.map