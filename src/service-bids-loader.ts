import { ServiceBid } from "./service-bid"

export class ServiceBidsLoader {
    static loadServiceBids(bids: any): ServiceBid[] {
        return bids.map((bid: any) =>
            new ServiceBid(
                bid.uid,
                bid.operatorUid,
                bid.stops,
                bid.bidAmount
            )
        )
    }
}