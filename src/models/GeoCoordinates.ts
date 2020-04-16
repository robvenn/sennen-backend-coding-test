import Latitude from './Latitude';
import Longitude from './Longitude';

type Coords = {
    lat: Latitude;
    long: Longitude;
};

export default class GeoCoordinates {
    lat: Latitude;
    long: Longitude;

    constructor(lat: number, long: number) {
        this.lat = new Latitude(lat);
        this.long = new Longitude(long);
    }

    get coords(): Coords {
        return {
            lat: this.lat,
            long: this.long,
        };
    }

    public toString(): string {
        return `{ lat: ${this.lat.toString()}, long: ${this.long.toString()} }`;
    }
}
