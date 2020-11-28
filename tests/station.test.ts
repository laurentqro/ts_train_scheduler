import { PlatformCode } from "../src/platform-code"
import { PositiveInteger } from "../src/positive-integer"
import { Station } from "../src/station"
import { StationCode } from "../src/station-code"

test('station has a set of plaftorms, each with its unique identifier within its station', () => {
    let platform1 = { uid: new PlatformCode("123456A"), length: PositiveInteger.new(5n) }
    let platform2 = { uid: new PlatformCode("123456A"), length: PositiveInteger.new(4n) }

    expect(() => new Station(StationCode.new("ABC"), PositiveInteger.new(5n), [platform1, platform2])).toThrow(Error)

    expect(() => new Station(StationCode.new("DEF"), PositiveInteger.new(5n), [platform1])).not.toThrow(Error)
    expect(() => new Station(StationCode.new("GHI"), PositiveInteger.new(5n), [platform2])).not.toThrow(Error)
})