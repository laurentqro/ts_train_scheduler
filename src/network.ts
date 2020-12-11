import { Operator } from "./operator";
import { OperatorUid } from "./operator-uid";
import { Station } from "./station"
import { Track } from "./track"

interface INetwork {
    readonly stations: readonly Station[]
    readonly tracks: readonly Track[]
    readonly operators: readonly Operator[]
    getOperator: (uid: OperatorUid) => Operator | null
}

export class Network implements INetwork {
    readonly stations: readonly Station[]
    readonly tracks: readonly Track[]
    readonly operators: readonly Operator[]

    constructor(stations: Station[], tracks: Track[], operators: Operator[]) {
        this.stations = stations
        this.tracks = tracks
        this.operators = operators
    }

    getOperator(uid: OperatorUid): Operator | null {
        return this.operators.find((operator) => operator.uid == uid) || null
    }
}