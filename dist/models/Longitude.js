"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LONGITUDE_MIN_VALUE = -180;
exports.LONGITUDE_MAX_VALUE = 180;
class Longitude {
    constructor(value) {
        if (value < exports.LONGITUDE_MIN_VALUE || value > exports.LONGITUDE_MAX_VALUE) {
            throw new RangeError(`value must be between ${exports.LONGITUDE_MIN_VALUE} and ${exports.LONGITUDE_MAX_VALUE}, got: ${value}`);
        }
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