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

    private static instances: { [key: string]: Track } = {}

    private static key(endpointUids: readonly StationUid[]): string {
        return endpointUids.map((e) => e.toString()).sort().join('-')
    }

    private constructor(uid: TrackUid,
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
        let stationUids = [
            StationUid.new(trackData.endpointUids[0]),
            StationUid.new(trackData.endpointUids[1])
        ]

        let key = Track.key(stationUids)
        let instance = Track.instances[key]

        if (instance == undefined) {
            instance = {
                uid: TrackUid.new(trackData.uid),
                endpointUids: [
                    StationUid.new(trackData.endpointUids[0]),
                    StationUid.new(trackData.endpointUids[1]),
                ],
                capacity: PositiveInteger.new(BigInt(trackData.capacity)),
                maxSpeed: PositiveInteger.new(BigInt(trackData.maxSpeed)),
                distance: PositiveInteger.new(BigInt(trackData.distance)),
            }

            Track.instances[key] = instance
        }

        return instance
    }

    static getByEndpointUids(stationUids: StationUid[]): Track {
        let key = Track.key(stationUids)
        return Track.instances[key]
    }
}