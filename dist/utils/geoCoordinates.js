"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers_1 = require("./numbers");
const NUMBER_OF_DIGITS = 7;
const LAT_MIN = -90;
const LAT_MAX = 90;
const genRandomLat = () => {
    return numbers_1.generateRandomNumber(LAT_MIN, LAT_MAX, NUMBER_OF_DIGITS);
};
const LNG_MIN = -180;
const LNG_MAX = 180;
const genRandomLng = () => {
    return numbers_1.generateRandomNumber(LNG_MIN, LNG_MAX, NUMBER_OF_DIGITS);
};
exports.generateRandomGeoCoordinates = () => {
    return { lat: genRandomLat(), long: genRandomLng() };
};
//# sourceMappingURL=geoCoordinates.js.map