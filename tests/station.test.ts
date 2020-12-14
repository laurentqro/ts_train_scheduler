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

test('add neighbour station', () => {
    let stationData1: StationData = {
        uid: "ABC",
        stopTime: 1,
        platforms: [
            { uid: "123456A", length: 5 },
            { uid: "123456B", length: 4 }
        ]
    }

    let station1: Station = Station.create(stationData1)

    let stationData2: StationData = {
        uid: "DEF",
        stopTime: 1,
        platforms: [
            { uid: "123456A", length: 5 },
            { uid: "123456B", length: 4 }
        ]
    }

    let station2: Station = Station.create(stationData2)

    let stationData3: StationData = {
        uid: "GHI",
        stopTime: 1,
        platforms: [
            { uid: "123456A", length: 5 },
            { uid: "123456B", length: 4 }
        ]
    }

    let station3: Station = Station.create(stationData3)

    station1.addNeighbour(station3)
    station1.addNeighbour(station2)

    expect(station1.neighbours).toEqual([station2, station3])

    expect(`${station1.neighbours[0].uid}`).toEqual("DEF") // neighbours sorted by UID
})