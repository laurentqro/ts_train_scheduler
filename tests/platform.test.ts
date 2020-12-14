import { PlatformData } from "../src/networkData"
import { Platform } from "../src/platform"

test('create a platform', () => {
    let platformData: PlatformData = { uid: "123A", length: 1 }
    let platform: Platform = Platform.create(platformData)

    expect(`${platform.uid}`).toEqual("123A")
    expect(`${platform.length}`).toEqual("1")
})