import { StationUid } from "./station-uid"
import { Platform } from "./platform"
import { PositiveInteger } from "./positive-integer"
import { PlatformData, StationData } from "./networkData"

export class Station {
    readonly uid: StationUid
    readonly stopTime: PositiveInteger
    readonly platforms: readonly Platform[]

    constructor(uid: StationUid, stopTime: PositiveInteger, platforms: Platform[]) {
        this.uid = uid
        this.stopTime = stopTime

        if (this.haveUniqueUids(platforms)) {
            this.platforms = platforms
        } else {
            throw new Error
        }
    }

    haveUniqueUids(platforms: Platform[]): Boolean {
        let uids = platforms.map((platform) => `${platform.uid}` )
        return (new Set(uids)).size == uids.length;
    }

    static create(station: StationData): Station {
        return new Station(
            StationUid.new(station.uid),
            PositiveInteger.new(BigInt(station.stopTime)),
            station.platforms.map((platformData: PlatformData) =>
                Platform.create(platformData)
            )
        )
    }
}