import { StationCode } from "./station-code"
import { Platform } from "./platform"
import { PositiveInteger } from "./positive-integer"

export interface Station {
    readonly uid: StationCode
    readonly stopTime: PositiveInteger
    readonly platforms: readonly Platform[]   
}