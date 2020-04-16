import moment from "moment";

import { SunriseSunset } from '../services/sunTime';

export const getResultWithEarliestSunrise = (a: SunriseSunset, b: SunriseSunset): SunriseSunset => {
    return moment.min(a.sunrise, b.sunrise) === a.sunrise ? a : b;
};
