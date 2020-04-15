"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LATITUDE_MIN_VALUE = -90;
exports.LATITUDE_MAX_VALUE = 90;
class Latitude {
    constructor(value) {
        if (value < exports.LATITUDE_MIN_VALUE || value > exports.LATITUDE_MAX_VALUE) {
            throw new RangeError(`value must be between ${exports.LATITUDE_MIN_VALUE} and ${exports.LATITUDE_MAX_VALUE}, got: ${value}`);
        }
        this.value = value;
    }
    toString() {
        return this.value.toString();
    }
}
exports.default = Latitude;
Latitude.MIN = exports.LATITUDE_MIN_VALUE;
Latitude.MAX = exports.LATITUDE_MAX_VALUE;
//# sourceMappingURL=Latitude.js.map