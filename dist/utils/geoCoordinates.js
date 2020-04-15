"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers_1 = require("./numbers");
const models_1 = require("../models");
const NUMBER_OF_DIGITS = 7;
const genRandomLat = () => {
    return numbers_1.generateRandomNumber(models_1.Latitude.MIN, models_1.Latitude.MAX, NUMBER_OF_DIGITS);
};
const genRandomLng = () => {
    return numbers_1.generateRandomNumber(models_1.Longitude.MIN, models_1.Longitude.MAX, NUMBER_OF_DIGITS);
};
exports.generateRandomGeoCoordinates = () => {
    return new models_1.GeoCoordinates(genRandomLat(), genRandomLng());
};
//# sourceMappingURL=geoCoordinates.js.map