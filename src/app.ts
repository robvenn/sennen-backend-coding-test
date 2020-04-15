import { generateRandomGeoCoordinates } from './utils/geoCoordinates';

const NUMBER_OF_COORDS = 100;
const coords = Array.from({ length: NUMBER_OF_COORDS }, generateRandomGeoCoordinates);

console.log({ coords });
