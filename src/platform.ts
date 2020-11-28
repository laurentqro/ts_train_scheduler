import { PlatformUid } from "./platform-uid"
import { PositiveInteger } from "./positive-integer";

export interface Platform {
    readonly uid: PlatformUid
    readonly length: PositiveInteger
}