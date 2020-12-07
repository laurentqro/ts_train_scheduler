import { PositiveInteger } from "./positive-integer";
import { StationUid } from "./station-uid"
import { TrackUid } from "./track-uid";

export interface Track {
    readonly uid: TrackUid
    readonly endpointUids: readonly [StationUid, StationUid]
    readonly capacity: PositiveInteger
    readonly maxSpeed: PositiveInteger
    readonly distance: PositiveInteger
}