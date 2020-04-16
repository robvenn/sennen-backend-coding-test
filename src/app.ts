import async from 'async';

import { generateRandomGeoCoordinates } from './utils';
import { getSunsetSunrise } from './services/sunTime';

const N_SETS_OF_COORDS = 10;
const MAX_CONCURRENT_REQUESTS = 5;

(async function init(): Promise<void> {
    try {
        const coordsList = Array.from({ length: N_SETS_OF_COORDS }, generateRandomGeoCoordinates);
        const results = await async.mapLimit(coordsList, MAX_CONCURRENT_REQUESTS, async ({ coords }, next: Function) => {
            try {
                const result = await getSunsetSunrise(coords);
                return next(null, { coords, ...result });
            } catch (err) {
                return next(err);
            }
        });
    } catch (err) {
        console.error(err);
    }
})();
