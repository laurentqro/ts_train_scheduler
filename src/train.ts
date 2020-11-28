import { PositiveInteger } from "./positive-integer";
import { TrainUid } from "./train-uid";

export interface Train {
    readonly uid: TrainUid
    readonly length: PositiveInteger
}