import { PositiveInteger } from "./positive-integer";
import { Station } from "./station"

export interface Track {
    readonly endpointUids: readonly [Station, Station]
    readonly capacity: PositiveInteger
    readonly maxSpeed: PositiveInteger
    readonly distance: PositiveInteger
}