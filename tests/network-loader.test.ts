import * as data from "./fixtures/network.json";

import { Network } from "../src/network";
import { NetworkLoader } from "../src/network-loader";

test('load network data', () => {
    let network: Network = NetworkLoader.loadNetwork(data)

    expect(network.stations.length).toEqual(3)
    expect(network.tracks.length).toEqual(3)
    expect(network.operators.length).toEqual(3)
})