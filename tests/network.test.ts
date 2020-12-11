
import { Network } from "../src/network";
import { NetworkLoader } from "../src/network-loader";
import { Operator } from "../src/operator";
import { OperatorUid } from "../src/operator-uid";
import * as data from "./network.json";

test('get operator by UID', () => {
    let network: Network = NetworkLoader.loadNetwork(data)
    let operatorUid: OperatorUid = OperatorUid.new("ABC")
    let operator: Operator | null = network.getOperator(operatorUid)

    expect(`${operator?.uid}`).toEqual("ABC")
})