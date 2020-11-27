import { TrackUid } from "../src/track-uid"

test('track is identified by a string of exactly nine decimal digits', () => {
    expect(() => new TrackUid("123")).toThrow(Error)
    expect(() => new TrackUid("ABCDEFGHI")).toThrow(Error)
    expect(() => new TrackUid("123456789")).not.toThrow(Error)
})

test('toString', () => {
    let trackUid = new TrackUid("123456789")
    expect(`${trackUid}`).toEqual("123456789")
});