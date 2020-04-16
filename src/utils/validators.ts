import R from 'ramda';

/*
 * returns true if value is a number, or otherwise false
 */
export const isNumber = R.is(Number);


/*
 * Validates if a value is a number
 */
export const validateNumber = (value: unknown) => {
    if (!isNumber(value)) {
        throw new TypeError(`Value ${value} must be a number, got ${typeof(value)}`)
    }
};


/*
 * validate if a number equals or is between min and max values
 */
export const validateNumberBetween = (value: number, min: number, max: number) => {
    validateNumber(value);
    if (value < min || value > max) {
        throw new RangeError(`value must be between ${min} and ${max}, got: ${value}`);
    }
};
