import axios from 'axios';
import moment, { Moment } from 'moment';

import { Coords } from '../models';

const API_DOMAIN = 'https://api.sunrise-sunset.org';
const RES_SUCCESS_STATUS = 'OK';
const TIME_OF_DAY_FORMAT = 'h:m:s A';
const DURATION_FORMAT = 'H:m:s';

export interface SunRiseSunSet {
    sunrise: Moment;
    sunset: Moment;
    dayLength: Moment;
}

export const getSunsetSunrise = async (coords: Coords): Promise<SunRiseSunSet> => {
    const { lat, long } = coords;
    const { data: { results, status } } = await axios.get(`${API_DOMAIN}/json?lat=${lat}&lng=${long}`);
    if (status != RES_SUCCESS_STATUS) {
        throw new Error(`Failed fetching sunrise-sunset data for coords: ${coords.toString()}`);
    }
    return {
        sunrise: moment(results.sunrise, TIME_OF_DAY_FORMAT),
        sunset: moment(results.sunset, TIME_OF_DAY_FORMAT),
        dayLength: moment(results.day_length, DURATION_FORMAT),
    };
};
