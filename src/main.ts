import * as networkData from "../data/network.json"
import * as serviceBidData from "../data/sparse-bids.json"

import { NetworkLoader } from "./network-loader"
import { ServiceBidsLoader } from "./service-bids-loader"
import { TrainScheduler } from "./train-scheduler"
import { TrainState } from "./train-state"

let schedule: TrainState[] = TrainScheduler.schedule(
    NetworkLoader.loadNetwork(networkData),
    ServiceBidsLoader.loadServiceBids(serviceBidData)
)

console.log(schedule)