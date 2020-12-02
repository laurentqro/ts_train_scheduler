import { StationUid } from "./station-uid";
import { Time } from "./time";

export interface Stop {
    readonly stationUid: StationUid
    readonly arrivalTime: Time
    readonly departureTime: Time
}