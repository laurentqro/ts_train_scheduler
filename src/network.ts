import { Operator } from "./operator";
import { Station } from "./station"
import { Track } from "./track"

export interface Network {
    readonly stations: readonly Station[]
    readonly tracks: readonly Track[]
    readonly operators: readonly Operator[]
}