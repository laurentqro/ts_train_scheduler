import { StationUid } from "./station-uid"
import { Platform } from "./platform"
import { PositiveInteger } from "./positive-integer"

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
}