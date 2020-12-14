import { StationUid } from "./station-uid"
import { Platform } from "./platform"
import { PositiveInteger } from "./positive-integer"
import { PlatformData, StationData } from "./networkData"

export class Station {
    readonly uid: StationUid
    readonly stopTime: PositiveInteger
    readonly platforms: readonly Platform[]

    private constructor(uid: StationUid, stopTime: PositiveInteger, platforms: Platform[]) {
        this.uid = uid
        this.stopTime = stopTime
        this.platforms = platforms
    }

    static haveUniqueUids(platforms: PlatformData[]): Boolean {
        let uids = platforms.map((platform) => `${platform.uid}`)
        return (new Set(uids)).size == uids.length;
    }

    static create(station: StationData): Station {
        let platforms = station.platforms.map((platformData: PlatformData) =>
            Platform.create(platformData)
        )

        if (this.haveUniqueUids(station.platforms)) {
            return new Station(
                StationUid.new(station.uid),
                PositiveInteger.new(BigInt(station.stopTime)),
                platforms
            )
        } else {
            throw new Error("Error: platforms must have unique UIDs for a given station")
        }
    }
}