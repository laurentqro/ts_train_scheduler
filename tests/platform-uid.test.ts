import { PlatformUid } from "../src/platform-uid"

test('platform code is a string of one or more digits, optionally followed by a single capital Latin letter A-Z)', () => {
    expect(() => new PlatformUid("1")).not.toThrow(Error)
    expect(() => new PlatformUid("12")).not.toThrow(Error)
    expect(() => new PlatformUid("123A")).not.toThrow(Error)

    expect(() => new PlatformUid("")).toThrow(Error)
    expect(() => new PlatformUid("ABC")).toThrow(Error)
    expect(() => new PlatformUid("A123")).toThrow(Error)
    expect(() => new PlatformUid("*&$")).toThrow(Error)
});

test('toString', () => {
    let platformCode = new PlatformUid("1234")
    expect(`${platformCode}`).toEqual("1234")
});