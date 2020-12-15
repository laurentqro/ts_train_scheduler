import { Station } from "./station"
import { Time } from "./time";

export interface Stop {
    readonly station: Station
    readonly arrivalTime: Time
    readonly departureTime: Time
}