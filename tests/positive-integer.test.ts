import { PositiveInteger } from "../src/positive-integer"

test('positive integers', () => {
    expect(() => PositiveInteger.new(0n)).toThrow(RangeError)
    expect(() => PositiveInteger.new(-1n)).toThrow(RangeError)
    expect(() => PositiveInteger.new(1n)).not.toThrow(RangeError)
})