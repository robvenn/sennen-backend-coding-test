export const LATITUDE_MIN_VALUE = -90;
export const LATITUDE_MAX_VALUE = 90;

export default class Latitude {
    static readonly MIN = LATITUDE_MIN_VALUE;
    static readonly MAX = LATITUDE_MAX_VALUE;

    private value: number;

    constructor(value: number) {
        if (value < LATITUDE_MIN_VALUE || value > LATITUDE_MAX_VALUE) {
            throw new RangeError(`value must be between ${LATITUDE_MIN_VALUE} and ${LATITUDE_MAX_VALUE}, got: ${value}`);
        }
        this.value = value;
    }

    toString(): string {
        return this.value.toString();
    }
}
