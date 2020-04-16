import async from 'async';
import fs from 'fs';

import { DURATION_FORMAT, TIME_OF_DAY_FORMAT } from './constants/dateAndTime';
import { getResultWithEarliestSunrise, generateRandomGeoCoordinates } from './utils';
import { getSunsetSunrise } from './services/sunTime';

const N_SETS_OF_COORDS = 100;
const MAX_CONCURRENT_REQUESTS = 5;
const EXAMPLE_OUTPUT_FILE_PATH = './example_output.json';

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
        const { dayLength, sunrise } = results.reduce(getResultWithEarliestSunrise);
        const earliestSunrise = sunrise.format(TIME_OF_DAY_FORMAT);
        const resultingDayLength = dayLength.format(DURATION_FORMAT);
        console.log({
            earliestSunrise,
            resultingDayLength,
        });
        const exampleOutput = JSON.stringify({
            results,
            earliestSunrise,
            resultingDayLength,
        }, null, 2);
        fs.writeFileSync(EXAMPLE_OUTPUT_FILE_PATH, exampleOutput);
    } catch (err) {
        console.error(err);
    }
})();
