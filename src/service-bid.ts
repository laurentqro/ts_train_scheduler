import { OperatorUid } from "./operator-uid";
import { ServiceUid } from "./service-uid";
import { Stop } from "./stop";

export class ServiceBid {
    readonly uid: ServiceUid
    readonly operatorUid: OperatorUid
    readonly stops: readonly [Stop, Stop, ...Stop[]]
    readonly bidAmount: number

    constructor(operatorUid: OperatorUid, stops: [Stop, Stop, ...Stop[]], bidAmount: number) {
        this.uid = new ServiceUid()
        this.operatorUid = operatorUid
        this.stops = stops
        this.bidAmount = bidAmount
    }
}