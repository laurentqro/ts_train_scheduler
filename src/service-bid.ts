import { OperatorUid } from "./operator-uid";
import { ServiceUid } from "./service-uid";
import { Stop } from "./stop";

export class ServiceBid {
    readonly uid: string
    readonly operatorUid: OperatorUid
    readonly stops: readonly [Stop, Stop, ...Stop[]]
    readonly bidAmount: number

    constructor(uid: string, operatorUid: OperatorUid, stops: [Stop, Stop, ...Stop[]], bidAmount: number) {
        this.uid = uid
        this.operatorUid = operatorUid
        this.stops = stops
        this.bidAmount = bidAmount
    }
}