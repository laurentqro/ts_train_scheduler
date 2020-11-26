import { StationCode } from "./station-code"
import { Platform } from "./platform"

export interface Station {
    readonly uid: StationCode
    readonly stopTime: number
    readonly platforms: readonly Platform[]   
}