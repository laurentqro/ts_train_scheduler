import { StationCode } from "../src/station-code"

test('station is identified by a 3-letter code (capital Latin letters [A-Z])', () => {
    expect(() => StationCode.new("123")).toThrow(Error)
    expect(() => StationCode.new("ABCD")).toThrow(Error)
    expect(() => StationCode.new("abc")).toThrow(Error)

    expect(() => StationCode.new("ABC")).not.toThrow(Error)
})

test('station code is unique', () => {
    StationCode.new("DEF")
    expect(() => StationCode.new("DEF")).toThrow(Error)
})