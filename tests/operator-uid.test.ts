import { OperatorUid } from "../src/operator-uid"

test('operator uid is 3-capital-letter code', () => {
    expect(() => OperatorUid.new("123")).toThrow(Error)
    expect(() => OperatorUid.new("ABC")).not.toThrow(Error)
})

test('operator uid is unique', () => {
    expect(OperatorUid.new("CDE")).toEqual(OperatorUid.new("CDE"))
})