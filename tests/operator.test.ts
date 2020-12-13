import { Operator } from "../src/operator"
import { OperatorUid } from "../src/operator-uid"
import { PositiveInteger } from "../src/positive-integer"
import { TrainUid } from "../src/train-uid"

test('each train is uniquely identified within its operator', () => {
    let train1 = { uid: new TrainUid("123456"), length: PositiveInteger.new(5n) }
    let train2 = { uid: new TrainUid("123456"), length: PositiveInteger.new(3n) }

    expect(() => new Operator(OperatorUid.new("ABC"), [train1, train2])).toThrow(Error)

    expect(() => new Operator(OperatorUid.new("DEF"), [train1])).not.toThrow(Error)
    expect(() => new Operator(OperatorUid.new("GHI"), [train2])).not.toThrow(Error)
})