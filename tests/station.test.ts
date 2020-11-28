import { PlatformCode } from "../src/platform-code"
import { PositiveInteger } from "../src/positive-integer"
import { Station } from "../src/station"

test('station has a set of plaftorms, each with its unique identifier within its station', () => {
    let platform1 = { uid: new PlatformCode("123456A"), length: PositiveInteger.new(5n) }
    let platform2 = { uid: new PlatformCode("123456A"), length: PositiveInteger.new(4n) }

    expect(() => new Station("ABC", PositiveInteger.new(5n), [platform1, platform2])).toThrow(Error)
})