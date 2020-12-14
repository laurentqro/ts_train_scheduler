import { TrainData } from "./networkData";
import { PositiveInteger } from "./positive-integer";
import { TrainUid } from "./train-uid";

export class Train {
    readonly uid: TrainUid
    readonly length: PositiveInteger

    constructor(uid: TrainUid, length: PositiveInteger) {
        this.uid = uid
        this.length = length
    }

    static create(trainData: TrainData): Train {
        return {
            uid: new TrainUid(trainData.uid),
            length: PositiveInteger.new(BigInt(trainData.length))
        }
    }
}