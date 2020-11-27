import { PositiveInteger } from "./positive-integer";
import { Station } from "./station"
import { TrackUid } from "./track-uid";

export interface Track {
    readonly uid: TrackUid
    readonly endpointUids: readonly [Station, Station]
    readonly capacity: PositiveInteger
    readonly maxSpeed: PositiveInteger
    readonly distance: PositiveInteger
}