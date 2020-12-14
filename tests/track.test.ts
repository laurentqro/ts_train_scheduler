import { PositiveInteger } from "../src/positive-integer"
import { StationUid } from "../src/station-uid"
import { Track } from "../src/track"

test('create a track', () => {
    let trackData = {
        uid: "123456789",
        endpointUids: ["ABC", "DEF"],
        capacity: 1,
        maxSpeed: 100,
        distance: 100
    }

    let track: Track = Track.create(trackData)

    expect(`${track.uid}`).toEqual("123456789")
    expect(track.endpointUids).toEqual([StationUid.new("ABC"), StationUid.new("DEF")])
    expect(track.capacity).toEqual(PositiveInteger.new(1n))
    expect(track.maxSpeed).toEqual(PositiveInteger.new(100n))
    expect(track.distance).toEqual(PositiveInteger.new(100n))
})