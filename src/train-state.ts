import { OperatorUid } from "./operator-uid";
import { PlatformUid } from "./platform-uid";
import { ServiceUid } from "./service-uid";
import { Time } from "./time";
import { TrackUid } from "./track-uid"
import { TrainUid } from "./train-uid";

export interface TrainState {
    [key: number]: TrainState | undefined
    readonly operatorUid: OperatorUid
    readonly trainUid: TrainUid
    readonly locationUid: TrackUid | PlatformUid | null | undefined
    readonly fromTime: Time
    readonly toTime: Time
    readonly serviceUid?: ServiceUid
}