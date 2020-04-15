import Latitude from './Latitude';
import Longitude from './Longitude';

export default class GeoCoordinates {
    lat: Latitude;
    long: Longitude;

    constructor(lat: number, long: number) {
        this.lat = new Latitude(lat);
        this.long = new Longitude(long);
    }

    public toString(): string {
        return `{ lat: ${this.lat.toString()}, long: ${this.long.toString()} }`;
    }
}
