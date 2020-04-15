"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const geoCoordinates_1 = require("./utils/geoCoordinates");
const NUMBER_OF_COORDS = 100;
const coords = Array.from({ length: NUMBER_OF_COORDS }, geoCoordinates_1.generateRandomGeoCoordinates);
console.log({ coords });
//# sourceMappingURL=app.js.map