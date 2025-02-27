import { TrainUid } from "../src/train-uid"

test('train uid is six decimal digits', () => {
    expect(() => new TrainUid("123456")).not.toThrow(Error)

    expect(() => new TrainUid("12345")).toThrow(Error)
    expect(() => new TrainUid("ABCDEF")).toThrow(Error)
})

test('toString', () => {
    let trainUid = new TrainUid("123456")
    expect(trainUid.toString()).toEqual("123456")
})