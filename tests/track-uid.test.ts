import { TrackUid } from "../src/track-uid"

test('track is identified by a string of exactly nine decimal digits', () => {
    expect(() => TrackUid.new("123")).toThrow(Error)
    expect(() => TrackUid.new("ABCDEFGHI")).toThrow(Error)
    expect(() => TrackUid.new("123456789")).not.toThrow(Error)
})

test('toString', () => {
    let trackUid = TrackUid.new("987654321")
    expect(`${trackUid}`).toEqual("987654321")
});

test('track uid is unique', () => {
    TrackUid.new("098098098")
    expect(() => TrackUid.new("098098098")).toThrow(Error)
})