import { validateNumberBetween } from "../utils";

export const LONGITUDE_MIN_VALUE = -180;
export const LONGITUDE_MAX_VALUE = 180;

export default class Longitude {
    static readonly MIN = LONGITUDE_MIN_VALUE;
    static readonly MAX = LONGITUDE_MAX_VALUE;

    readonly value: number;

    constructor(value: number) {
        validateNumberBetween(value, LONGITUDE_MIN_VALUE, LONGITUDE_MAX_VALUE);
        this.value = value;
    }

    toString(): string {
        return `${this.value}`;
    }
}
