import { TrackData } from "./networkData";
import { PositiveInteger } from "./positive-integer";
import { StationUid } from "./station-uid"
import { TrackUid } from "./track-uid";

export class Track {
    readonly uid: TrackUid
    readonly endpointUids: readonly [StationUid, StationUid]
    readonly capacity: PositiveInteger
    readonly maxSpeed: PositiveInteger
    readonly distance: PositiveInteger

    constructor(uid: TrackUid,
        endpointUids: readonly [StationUid, StationUid],
        capacity: PositiveInteger,
        maxSpeed: PositiveInteger,
        distance: PositiveInteger
    ) {
        this.uid = uid
        this.endpointUids = endpointUids
        this.capacity = capacity
        this.maxSpeed = maxSpeed
        this.distance = distance
    }

    static create(trackData: TrackData): Track {
        return {
            uid: TrackUid.new(trackData.uid),
            endpointUids: [
                StationUid.new(trackData.endpointUids[0]),
                StationUid.new(trackData.endpointUids[1]),
            ],
            capacity: PositiveInteger.new(BigInt(trackData.capacity)),
            maxSpeed: PositiveInteger.new(BigInt(trackData.maxSpeed)),
            distance: PositiveInteger.new(BigInt(trackData.distance)),
        }
    }
}