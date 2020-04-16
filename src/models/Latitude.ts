import { validateNumberBetween } from '../utils';

export const LATITUDE_MIN_VALUE = -90;
export const LATITUDE_MAX_VALUE = 90;

export default class Latitude {
    static readonly MIN = LATITUDE_MIN_VALUE;
    static readonly MAX = LATITUDE_MAX_VALUE;

    private value: number;

    constructor(value: number) {
        validateNumberBetween(value, LATITUDE_MIN_VALUE, LATITUDE_MAX_VALUE);
        this.value = value;
    }

    toString(): string {
        return this.value.toString();
    }
}
