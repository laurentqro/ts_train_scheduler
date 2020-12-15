import { Network } from "./network";
import { ServiceBid } from "./service-bid";
import { Station } from "./station"
import { Train } from "./train";
import { TrainState } from "./train-state";

export class TrainScheduler {
    static schedule(network: Network, serviceBids: ServiceBid[]): TrainState[] {
        // group service bids by endpoints (first and last stops)
        // for each aggregate, sort service bids by descending bid amount
        // for each service bid,
            // determine the path of the service, from origin to destination
                // network.shortestPath("ABC", "XYZ") => Station[]
            // select operator that has a train that can travel all along the service, i.e. conform to network constraints all along the way:
            // platform length where train stops (get min length platform)
            // platform is available
            // track capacity

        let bestServiceBid: ServiceBid = serviceBids.reduce(
            (prev, current) => (prev.bidAmount > current.bidAmount) ? prev : current
        )

        let train: Train | null | undefined = network.getOperator(bestServiceBid.operatorUid)?.trains[0]

        let origin = bestServiceBid.stops[0].station
        let destination = bestServiceBid.stops[1].station
        let stations: Station[] = network.shortestPathsFromOrigin(origin)

        // walk from origin to destination
        let trainStates: TrainState[] = stations.map((station) => {
            return {
                operatorUid: bestServiceBid.operatorUid,
                trainUid: train!.uid,
                locationUid: location.uid,
                fromTime: location.fromTime,
                toTime: location.toTime
            }
        })

        return trainStates
    }
}