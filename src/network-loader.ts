import { Network } from "./network";
import { NetworkData, OperatorData, StationData, TrackData } from "./networkData";
import { Operator } from "./operator";
import { Station } from "./station";
import { Track } from "./track";

export class NetworkLoader {
    static loadNetwork(networkData: NetworkData): Network {
        return Network.create(
            NetworkLoader.loadStations(networkData),
            NetworkLoader.loadTracks(networkData),
            NetworkLoader.loadOperators(networkData)
        )
    }

    private static loadStations(networkData: NetworkData): Station[] {
        return networkData.stations.map((station: StationData) =>
            Station.create(station)
        );
    }

    static loadTracks(networkData: NetworkData): Track[] {
        return networkData.tracks.map((trackData: TrackData) => {
            return Track.create(trackData)
        })
    }

    private static loadOperators(networkData: NetworkData): Operator[] {
        return networkData.operators.map((operatorData: OperatorData) =>
            Operator.create(operatorData)
        )
    }
}