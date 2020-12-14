import { Operator } from "./operator";
import { OperatorUid } from "./operator-uid";
import { Station } from "./station"
import { StationUid } from "./station-uid";
import { Track } from "./track"

export class Network {
    readonly stations: Station[]
    readonly tracks: Track[]
    readonly operators: Operator[]

    constructor(stations: Station[], tracks: Track[], operators: Operator[]) {
        this.stations = stations
        this.tracks = tracks
        this.operators = operators
    }

    getOperator(uid: OperatorUid): Operator | null {
        return this.operators.find((operator) => operator.uid == uid) || null
    }

    getStation(uid: StationUid): Station | null {
        return this.stations.find((station) => station.uid == uid) || null
    }

    addStation(station: Station): string | undefined {
        if (this.getStation(station.uid)) {
            return "Error: station with this UID already exists"
        } else {
            this.stations.push(station)
            return undefined
        }
    }
}