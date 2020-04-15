import { generateRandomNumber } from './numbers';
import { GeoCoordinates, Latitude, Longitude } from '../models';

const NUMBER_OF_DIGITS = 7;

const genRandomLat = (): number => {
    return generateRandomNumber(Latitude.MIN, Latitude.MAX, NUMBER_OF_DIGITS);
};

const genRandomLng = (): number => {
    return generateRandomNumber(Longitude.MIN, Longitude.MAX, NUMBER_OF_DIGITS);
};

export const generateRandomGeoCoordinates = (): GeoCoordinates => {
    return new GeoCoordinates(genRandomLat(), genRandomLng());
};
