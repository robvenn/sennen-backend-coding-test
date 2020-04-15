export const LONGITUDE_MIN_VALUE = -180;
export const LONGITUDE_MAX_VALUE = 180;

export default class Longitude {
    static readonly MIN = LONGITUDE_MIN_VALUE;
    static readonly MAX = LONGITUDE_MAX_VALUE;

    private value: number;

    constructor(value: number) {
        if (value < LONGITUDE_MIN_VALUE || value > LONGITUDE_MAX_VALUE) {
            throw new RangeError(`value must be between ${LONGITUDE_MIN_VALUE} and ${LONGITUDE_MAX_VALUE}, got: ${value}`);
        }
        this.value = value;
    }

    toString(): string {
        return this.value.toString();
    }
}
