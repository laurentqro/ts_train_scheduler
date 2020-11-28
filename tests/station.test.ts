import { PlatformUid } from "../src/platform-uid"
import { PositiveInteger } from "../src/positive-integer"
import { Station } from "../src/station"
import { StationUid } from "../src/station-uid"

test('station has a set of plaftorms, each with its unique identifier within its station', () => {
    let platform1 = { uid: new PlatformUid("123456A"), length: PositiveInteger.new(5n) }
    let platform2 = { uid: new PlatformUid("123456A"), length: PositiveInteger.new(4n) }

    expect(() => new Station(StationUid.new("ABC"), PositiveInteger.new(5n), [platform1, platform2])).toThrow(Error)

    expect(() => new Station(StationUid.new("DEF"), PositiveInteger.new(5n), [platform1])).not.toThrow(Error)
    expect(() => new Station(StationUid.new("GHI"), PositiveInteger.new(5n), [platform2])).not.toThrow(Error)
})