import { ServiceBid } from "../src/service-bid";
import { ServiceBidsLoader } from "../src/service-bids-loader";
import * as bidsData from "./fixtures/bids/sparse-bids.json";

test('load service bids data', () => {
    let serviceBids: ServiceBid[] = ServiceBidsLoader.loadServiceBids(bidsData)

    expect(serviceBids.length).toEqual(2)
})