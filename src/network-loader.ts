import { Network } from "./network";
import { Operator } from "./operator";
import { OperatorUid } from "./operator-uid";
import { Platform } from "./platform";
import { PlatformUid } from "./platform-uid";
import { PositiveInteger } from "./positive-integer";
import { Station } from "./station";
import { StationUid } from "./station-uid";
import { Track } from "./track";
import { TrackUid } from "./track-uid";
import { Train } from "./train";
import { TrainUid } from "./train-uid";

type NetworkData = {
    stations: StationData[]
    tracks: TrackData[]
    operators: OperatorData[]
}

type OperatorData = {
    uid: string
    trains: TrainData[]
}

type TrainData = {
    uid: string
    length: number
}

type StationData = {
    uid: string,
    stopTime: number,
    platforms: PlatformData[]
}

type PlatformData = {
    uid: string
    length: number
}

type TrackData = {
    uid: string,
    endpointUids: string[]
    capacity: number
    maxSpeed: number
    distance: number
}

export class NetworkLoader {
    static loadNetwork(networkData: NetworkData): Network {
        return new Network(
            NetworkLoader.loadStations(networkData),
            NetworkLoader.loadTracks(networkData),
            NetworkLoader.loadOperators(networkData)
        )
    }

    private static loadStations(networkData: NetworkData): Station[] {
        return networkData.stations.map((station: StationData) =>
            NetworkLoader.createStation(station)
        );
    }

    static loadTracks(networkData: NetworkData): Track[] {
        return networkData.tracks.map((track: TrackData) => {
            return {
                uid: TrackUid.new(track.uid),
                endpointUids: [
                    StationUid.new(track.endpointUids[0]),
                    StationUid.new(track.endpointUids[1]),
                ],
                capacity: PositiveInteger.new(BigInt(track.capacity)),
                maxSpeed: PositiveInteger.new(BigInt(track.maxSpeed)),
                distance: PositiveInteger.new(BigInt(track.distance)),
            }
        })
    }

    private static loadOperators(networkData: NetworkData): Operator[] {
        return networkData.operators.map((operator) => NetworkLoader.createOperator(operator))
    }

    private static createOperator(operator: OperatorData): Operator {
        return new Operator(
            OperatorUid.new(operator.uid),
            operator.trains.map((train: TrainData) => NetworkLoader.createTrain(train))
        )
    }

    private static createTrain(train: TrainData): Train {
        return {
            uid: new TrainUid(train.uid),
            length: PositiveInteger.new(BigInt(train.length))
        }
    }

    private static createStation(station: StationData): Station {
        return new Station(
            StationUid.new(station.uid),
            PositiveInteger.new(BigInt(station.stopTime)),
            station.platforms.map((platform: PlatformData) =>
                NetworkLoader.createPlatform(platform.uid, platform.length)
            )
        )
    }

    private static createPlatform(uid: string, length: number): Platform {
        return {
            uid: new PlatformUid(uid),
            length: PositiveInteger.new(BigInt(length))
        }
    }
}