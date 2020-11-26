import { PlatformCode } from "../src/platform-code"

test('platform code is a string of one or more digits, optionally followed by a single capital Latin letter A-Z)', () => {
    expect(() => new PlatformCode("1")).not.toThrow(Error)
    expect(() => new PlatformCode("12")).not.toThrow(Error)
    expect(() => new PlatformCode("123A")).not.toThrow(Error)

    expect(() => new PlatformCode("")).toThrow(Error)
    expect(() => new PlatformCode("ABC")).toThrow(Error)
    expect(() => new PlatformCode("A123")).toThrow(Error)
    expect(() => new PlatformCode("*&$")).toThrow(Error)
});

test('toString', () => {
    let platformCode = new PlatformCode("1234")
    expect(`${platformCode}`).toEqual("1234")
});