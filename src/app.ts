import { generateRandomGeoCoordinates } from './utils/geoCoordinates';

const NUMBER_OF_SETS_OF_COORDS = 100;
const coordsList = Array.from({ length: NUMBER_OF_SETS_OF_COORDS }, generateRandomGeoCoordinates);

coordsList.forEach(coords => {
    console.log(coords);
});
