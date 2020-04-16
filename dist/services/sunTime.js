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
const axios_1 = __importDefault(require("axios"));
const moment_1 = __importDefault(require("moment"));
const API_DOMAIN = 'https://api.sunrise-sunset.org';
const RES_SUCCESS_STATUS = 'OK';
const TIME_OF_DAY_FORMAT = 'h:m:s A';
const DURATION_FORMAT = 'H:m:s';
exports.getSunsetSunrise = (coords) => __awaiter(void 0, void 0, void 0, function* () {
    const { lat, long } = coords;
    const { data: { results, status } } = yield axios_1.default.get(`${API_DOMAIN}/json?lat=${lat}&lng=${long}`);
    if (status != RES_SUCCESS_STATUS) {
        throw new Error(`Failed fetching sunrise-sunset data for coords: ${coords.toString()}`);
    }
    return {
        sunrise: moment_1.default(results.sunrise, TIME_OF_DAY_FORMAT),
        sunset: moment_1.default(results.sunset, TIME_OF_DAY_FORMAT),
        dayLength: moment_1.default(results.day_length, DURATION_FORMAT),
    };
});
//# sourceMappingURL=sunTime.js.map