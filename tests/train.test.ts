import { TrainData } from "../src/networkData"
import { PositiveInteger } from "../src/positive-integer"
import { Train } from "../src/train"

test('create a train', () => {
    let trainData: TrainData = { uid: "123456", length: 5 }
    let train: Train = Train.create(trainData)

    expect(`${train.uid}`).toEqual("123456")
    expect(train.length).toEqual(PositiveInteger.new(5n))
})