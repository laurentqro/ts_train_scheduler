import { Operator } from "./operator";
import { OperatorUid } from "./operator-uid";
import { Station } from "./station"
import { StationUid } from "./station-uid";
import { Track } from "./track"

export class Network {
    readonly stations: Station[]
    readonly tracks: Track[]
    readonly operators: Operator[]

    static vertices: {
        [key: string]: Station | undefined
    } = {}

    constructor(stations: Station[], tracks: Track[], operators: Operator[]) {
        this.stations = stations
        this.tracks = tracks
        this.operators = operators
    }

    getOperator(uid: OperatorUid): Operator | null {
        return this.operators.find((operator) => operator.uid == uid) || null
    }

    getStation(uid: StationUid): Station | undefined {
        return this.stations.find((station) => station.uid == uid) || undefined
    }

    addStation(station: Station): string | undefined {
        this.stations.push(station)
        Network.vertices[`${station.uid}`] = station
        return undefined
    }

    addTrack(track: Track): string | undefined {
        this.tracks.push(track)

        let [uid1, uid2] = track.endpointUids
        let station1 = this.getStation(uid1)
        let station2 = this.getStation(uid2)

        if (station1 && station2) {
            Network.vertices[`${uid1}`] = station1
            Network.vertices[`${uid2}`] = station2
            return undefined
        } else {
            return "Error"
        }
    }
    }
}