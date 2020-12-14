import { StationData } from "../src/networkData"
import { Station } from "../src/station"

test('create a station', () => {
    let stationData: StationData = {
        uid: "ABC",
        stopTime: 1,
        platforms: []
    }

    let station: Station = Station.create(stationData)

    expect(`${station.uid}`).toEqual("ABC")
    expect(`${station.stopTime}`).toEqual("1")
    expect(station.platforms).toEqual([])
})

test('duplicate platforms for given station', () => {
    let stationData: StationData = {
        uid: "ABC",
        stopTime: 1,
        platforms: [
            { uid: "123456A", length: 5 },
            { uid: "123456A", length: 4 }
        ]
    }

    expect(() => Station.create(stationData)).toThrow(Error)
})

test('non-duplicate platforms for a given station', () => {
    let stationData: StationData = {
        uid: "ABC",
        stopTime: 1,
        platforms: [
            { uid: "123456A", length: 5 },
            { uid: "123456B", length: 4 }
        ]
    }

    expect(() => Station.create(stationData)).not.toThrow(Error)
})