import { Network } from "./network";
import { Operator } from "./operator";
import { OperatorUid } from "./operator-uid";
import { Platform } from "./platform";
import { PlatformUid } from "./platform-uid";
import { PositiveInteger } from "./positive-integer";
import { Station } from "./station";
import { StationUid } from "./station-uid";
import { Track } from "./track";

export class NetworkLoader {
    static loadNetwork(data: any): Network {
        return {
            stations: NetworkLoader.loadStations(data),
            tracks: NetworkLoader.loadTracks(data),
            operators: NetworkLoader.loadOperators(data),
        }
    }

    private static loadStations(data: any): Station[] {
        return data.stations.map((station: any) =>
            NetworkLoader.parseStation(station.uid, station.stopTime, station.platforms)
        );
    }

    private static loadTracks(data: any): Track[] {
        return data.tracks.map((track: any) => {
            return {
                uid: track.uid,
                endpointUids: track.endpointUids.map((uid: string) => StationUid.new(uid)),
                capacity: PositiveInteger.new(BigInt(track.capacity)),
                maxSpeed: PositiveInteger.new(BigInt(track.maxSpeed)),
                distance: PositiveInteger.new(BigInt(track.distance)),

            }
        })
    }

    private static loadOperators(data: any): Operator[] {
        return data.operators.map((operator: { uid: string, trains: []}) => {
            return new Operator(OperatorUid.new(operator.uid), operator.trains)
        })
    }

    private static parseStation(uid: string, stopTime: number, platforms: []) {
        return new Station(
            StationUid.new(uid),
            PositiveInteger.new(BigInt(stopTime)),
            platforms.map((platform: any) =>
                NetworkLoader.parsePlatform(platform.uid, platform.length)
            )
        )
    }

    private static parsePlatform(uid: string, length: number): Platform {
        return {
            uid: new PlatformUid(uid),
            length: PositiveInteger.new(BigInt(length))
        }
    }
}