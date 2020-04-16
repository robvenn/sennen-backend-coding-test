"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Latitude_1 = __importDefault(require("./Latitude"));
const Longitude_1 = __importDefault(require("./Longitude"));
class GeoCoordinates {
    constructor(lat, long) {
        this.lat = new Latitude_1.default(lat);
        this.long = new Longitude_1.default(long);
    }
    get coords() {
        return {
            lat: this.lat,
            long: this.long,
        };
    }
    toString() {
        return `{ lat: ${this.lat.toString()}, long: ${this.long.toString()} }`;
    }
}
exports.default = GeoCoordinates;
//# sourceMappingURL=GeoCoordinates.js.map