import axios from 'axios';
import moment, { Moment } from 'moment';

import { Coords } from '../models';
import { DURATION_FORMAT, TIME_OF_DAY_FORMAT } from '../constants/dateAndTime';

const API_DOMAIN = 'https://api.sunrise-sunset.org';
const RES_SUCCESS_STATUS = 'OK';

export interface SunriseSunset {
    sunrise: Moment;
    sunset: Moment;
    dayLength: Moment;
}

export const getSunsetSunrise = async (coords: Coords): Promise<SunriseSunset> => {
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
