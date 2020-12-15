import { Network } from "../src/network";
import { NetworkLoader } from "../src/network-loader";
import { TrackData } from "../src/networkData";
import { Operator } from "../src/operator";
import { OperatorUid } from "../src/operator-uid";
import { Station } from "../src/station";
import { StationUid } from "../src/station-uid";
import { Track } from "../src/track";
import * as data from "./fixtures/network.json"

describe('The network', () => {
    let network: Network = NetworkLoader.loadNetwork(data)

    test('get operator by UID', () => {
        let operatorUid: OperatorUid = OperatorUid.new("ABC")
        let operator: Operator | undefined = network.getOperator(operatorUid)

        expect(`${operator?.uid}`).toEqual("ABC")
    })

    test('get station by UID', () => {
        let stationUid: StationUid = StationUid.new("LHR")
        let station: Station | undefined = network.getStation(stationUid)

        expect(`${station?.uid}`).toEqual("LHR")
    })

    test('add station', () => {
        let station: Station = Station.create({ uid: "FOO", stopTime: 5, platforms: [] })
        network.addStation(station)

        expect(network.stations).toContain(station)
    })

    test('add track', () => {
        let station1 = Station.create({ uid: "ABC", stopTime: 5, platforms: [] })
        let station2 = Station.create({ uid: "DEF", stopTime: 5, platforms: [] })

        network.addStation(station1)
        network.addStation(station2)

        let trackData: TrackData = {
            uid: "123456788",
            endpointUids: ["ABC", "DEF"],
            capacity: 1,
            maxSpeed: 100,
            distance: 100
        }

        let track: Track = Track.create(trackData)

        network.addTrack(track)

        expect(network.tracks).toContain(track)
    })

    test('shortest path', () => {
        let origin = network.getStation(StationUid.new("LHR"))
        let intermediary = network.getStation(StationUid.new("NCE"))
        let destination = network.getStation(StationUid.new("JFK"))

        network.shortestPath(origin, destination!)

        expect(network.shortestPath(origin, destination)).toEqual([origin, intermediary, destination])
    })
})