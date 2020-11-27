import { PlatformCode } from "./platform-code"
import { PositiveInteger } from "./positive-integer";

export interface Platform {
    readonly uid: PlatformCode
    readonly length: PositiveInteger
}