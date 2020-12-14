import { OperatorData, TrainData } from "./networkData"
import { OperatorUid } from "./operator-uid"
import { Train } from "./train"

export class Operator {
    readonly uid: OperatorUid
    readonly trains: readonly Train[]

    private constructor(uid: OperatorUid, trains: Train[]) {
        this.uid = uid
        this.trains = trains
    }

    static haveUniqueUids(trains: TrainData[]): Boolean {
        let uids = trains.map((train) => `${train.uid}` )
        return (new Set(uids)).size == uids.length;
    }

    static create(operatorData: OperatorData): Operator {
        if (this.haveUniqueUids(operatorData.trains)) {
            return new Operator(
                OperatorUid.new(operatorData.uid),
                operatorData.trains.map((train: TrainData) => Train.create(train))
            )
        } else {
            throw new Error("Train UIDs must be unique for any given operator")
        }
    }
}