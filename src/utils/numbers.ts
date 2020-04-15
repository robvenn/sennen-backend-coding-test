
export const generateRandomNumber = (min: number, max: number, numDigits: number): number => {
    const rnd = min + (Math.random() * (max - min));
    return Number(rnd.toFixed(numDigits));
};
