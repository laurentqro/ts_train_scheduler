import { OperatorData } from "../src/networkData"
import { Operator } from "../src/operator"

test('create an operator', () => {
    let operatorData: OperatorData = { uid: "ABC", trains: [] }
    let operator: Operator = Operator.create(operatorData)

    expect(`${operator.uid}`).toEqual("ABC")
    expect(operator.trains).toEqual([])
})

test('duplicate train UIDs within operator', () => {
    let operatorData: OperatorData = {
        uid: "ABC",
        trains: [
            { uid: "123456", length: 5 },
            { uid: "123456", length: 3 }
        ]
    }

    expect(() => Operator.create(operatorData)).toThrow(Error)
})

test('create an operator', () => {
    let operatorData: OperatorData = {
        uid: "ABC",
        trains: [
            { uid: "123456", length: 5 },
            { uid: "654321", length: 3 }
        ]
    }

    expect(() => Operator.create(operatorData)).not.toThrow(Error)
})