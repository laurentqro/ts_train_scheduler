import { StationUid } from "../src/station-uid"

test('station is identified by a 3-letter code (capital Latin letters [A-Z])', () => {
    expect(() => StationUid.new("123")).toThrow(Error)
    expect(() => StationUid.new("ABCD")).toThrow(Error)
    expect(() => StationUid.new("abc")).toThrow(Error)

    expect(() => StationUid.new("ABC")).not.toThrow(Error)
})

test('station code is unique', () => {
    expect(StationUid.new("DEF")).toEqual(StationUid.new("DEF"))
})