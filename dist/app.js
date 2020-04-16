"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_1 = __importDefault(require("async"));
const utils_1 = require("./utils");
const sunTime_1 = require("./services/sunTime");
const N_SETS_OF_COORDS = 10;
const MAX_CONCURRENT_REQUESTS = 5;
(function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const coordsList = Array.from({ length: N_SETS_OF_COORDS }, utils_1.generateRandomGeoCoordinates);
            const results = yield async_1.default.mapLimit(coordsList, MAX_CONCURRENT_REQUESTS, ({ coords }, next) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const result = yield sunTime_1.getSunsetSunrise(coords);
                    return next(null, Object.assign({ coords }, result));
                }
                catch (err) {
                    return next(err);
                }
            }));
        }
        catch (err) {
            console.error(err);
        }
    });
})();
//# sourceMappingURL=app.js.map