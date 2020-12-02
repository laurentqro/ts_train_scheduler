import { ServiceUid } from "../src/service-uid"

test('service UID is incremental', () => {
    let serviceUid1 = new ServiceUid()
    let serviceUid2 = new ServiceUid()

    expect(serviceUid1.value).toEqual(1)
    expect(serviceUid2.value).toEqual(2)
})