import { generateRandomNumber } from './numbers';

const NUMBER_OF_DIGITS = 7;

const LAT_MIN = -90;
const LAT_MAX = 90;

const genRandomLat = (): number => {
    return generateRandomNumber(LAT_MIN, LAT_MAX, NUMBER_OF_DIGITS);
};

const LNG_MIN = -180;
const LNG_MAX = 180;

const genRandomLng = (): number => {
    return generateRandomNumber(LNG_MIN, LNG_MAX, NUMBER_OF_DIGITS);
};

type GeoCoordinates = {
    lat: number;
    long: number;
};

export const generateRandomGeoCoordinates = (): GeoCoordinates => {
    return { lat: genRandomLat(), long: genRandomLng() };
};
