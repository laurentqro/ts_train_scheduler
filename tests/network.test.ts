import { Network } from "../src/network";
import { NetworkLoader } from "../src/network-loader";
import { Operator } from "../src/operator";
import { OperatorUid } from "../src/operator-uid";
import { Station } from "../src/station";
import { StationUid } from "../src/station-uid";
import * as data from "./fixtures/network.json"

describe('The network', () => {
    let network: Network = NetworkLoader.loadNetwork(data)

    test('get operator by UID', () => {
        let operatorUid: OperatorUid = OperatorUid.new("ABC")
        let operator: Operator | null = network.getOperator(operatorUid)

        expect(`${operator?.uid}`).toEqual("ABC")
    })

    test('get station by UID', () => {
        let stationUid: StationUid = StationUid.new("LHR")
        let station: Station | null = network.getStation(stationUid)

        expect(`${station?.uid}`).toEqual("LHR")
    })

    test('add station', () => {
        let station: Station = Station.create({ uid: "FOO", stopTime: 5, platforms: [] })
        network.addStation(station)

        expect(network.stations).toContain(station)
    })

    test('do not add station if it already exists', () => {
        let station: Station = Station.create({ uid: "FOO", stopTime: 5, platforms: [] })

        network.addStation(station)
        let result = network.addStation(station)
        expect(result).toEqual("Error: station with this UID already exists")
    })
})