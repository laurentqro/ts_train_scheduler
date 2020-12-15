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

    private constructor(stations: Station[], tracks: Track[], operators: Operator[]) {
        this.stations = stations
        this.tracks = tracks
        this.operators = operators
    }

    static create(stations: Station[], tracks: Track[], operators: Operator[]): Network {
        let network = new Network([], [], [])

        for (let station of stations) {
            network.addStation(station)
        }

        for (let track of tracks) {
            network.addTrack(track)
        }

        for (let operator of operators) {
            network.addOperator(operator)
        }

        return network
    }

    getOperator(uid: OperatorUid): Operator | undefined {
        return this.operators.find((operator) => operator.uid == uid)
    }

    addOperator(operator: Operator): undefined {
        this.operators.push(operator)
        return undefined
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