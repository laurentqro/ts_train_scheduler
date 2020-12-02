import { OperatorUid } from "./operator-uid";
import { Stop } from "./stop";

export interface Service {
    readonly uid: number
    readonly operatorUid: OperatorUid
    readonly stops: readonly [Stop, Stop, ...Stop[]]
    readonly bidAmount: number
}