export class StationCode {
    private constructor(private value: string) {
        const regex = RegExp('^[A-Z]{3}$')
        let isValid = regex.test(value)

        if (!isValid) {
            throw Error("Station code must be three capital Latin letters [A-Z]")
        }
    }

    public static new(value: string): StationCode {
        let key = StationCode.key(value)
        let instance = StationCode.instances[key]

        if (instance) {
            throw Error("A station with this code already exists.")
        }

        if (instance == undefined) {
            instance = new StationCode(value)
            StationCode.instances[key] = instance
        }

        return instance
    }

    toString(): string {
        return this.value.toString()
    }

    private static key(value: string): string {
        return value.toString()
    }

    private static instances: {
        [key: string]: StationCode | undefined
    } = {}
}