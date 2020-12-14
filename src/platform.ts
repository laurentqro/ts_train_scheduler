import { PlatformData } from "./networkData";
import { PlatformUid } from "./platform-uid"
import { PositiveInteger } from "./positive-integer";

export class Platform {
    readonly uid: PlatformUid
    readonly length: PositiveInteger

    constructor(uid: PlatformUid, length: PositiveInteger) {
        this.uid = uid
        this.length = length
    }

    static create(data: PlatformData): Platform {
        return {
            uid: new PlatformUid(data.uid),
            length: PositiveInteger.new(BigInt(data.length))
        }
    }
}