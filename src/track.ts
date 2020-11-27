import { Station } from "./station"

export interface Track {
    readonly endpointUids: readonly [Station, Station]
}