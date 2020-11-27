export class PositiveInteger {
    private static instances: {
        [key: string]: PositiveInteger | undefined
    } = {}

    private static key(value: bigint): string {
        return value.toString()
    }

    private constructor(private value: bigint) {
        if (value <= 0) {
            throw new RangeError("Must be > 0")
        }
    }

    toString(): string {
        return this.value.toString()
    }

    public static new(value: bigint): PositiveInteger {
        let key = PositiveInteger.key(value)
        let instance = PositiveInteger.instances[key]

        if (instance == undefined) {
            instance = new PositiveInteger(value)
            PositiveInteger.instances[key] = instance
        }

        return instance
    }
}