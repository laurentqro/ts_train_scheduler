import * as networkData from "./fixtures/single-track.json";
import * as serviceBidsData from "./fixtures/bids/sparse-bids.json";

import { Network } from "../src/network";
import { NetworkLoader } from "../src/network-loader"
import { TrainScheduler } from "../src/train-scheduler";
import { TrainState } from "../src/train-state";
import { ServiceBid } from "../src/service-bid";
import { ServiceBidsLoader } from "../src/service-bids-loader";

describe('given a two-station network with a single track', () => {
    let network: Network = NetworkLoader.loadNetwork(networkData)
    let serviceBids: ServiceBid[] = ServiceBidsLoader.loadServiceBids(serviceBidsData)
    let trainStates: TrainState[] = TrainScheduler.schedule(network, serviceBids)

    it('is the highest-bidding operator that is granted the service', () => {
        let isHighestBidder: (trainState: TrainState) => Boolean = (currentTrainState: TrainState) => `${currentTrainState.operatorUid}` == "DEF"

        expect(trainStates.every(isHighestBidder)).toBe(true)
    })

    it('first train state has fromTime of 00:00 ', () => {
        expect(trainStates[0].fromTime).toEqual({ "hh": 0, "mm": 0 })
    })

    it('last train state has toTime of 23:59 ', () => {
        expect(trainStates[trainStates.length -1].toTime).toEqual({ "hh": 23, "mm": 59 })
    })
})
