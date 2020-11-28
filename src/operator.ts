import { Train } from "./train"

export class Operator {
    readonly uid: string
    readonly trains: readonly Train[]

    constructor(uid: string, trains: Train[]) {
        this.uid = uid

        if (this.haveUniqueUids(trains)) {
            this.trains = trains
        } else {
            throw new Error
        }
    }

    haveUniqueUids(trains: Train[]): Boolean {
        let uids = trains.map((train) => `${train.uid}` )
        return (new Set(uids)).size == uids.length;
    }
}