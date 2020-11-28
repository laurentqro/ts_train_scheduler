export class StationUid {
    private constructor(private value: string) {
        const regex = RegExp('^[A-Z]{3}$')
        let isValid = regex.test(value)

        if (!isValid) {
            throw Error("Station code must be three capital Latin letters [A-Z]")
        }
    }

    public static new(value: string): StationUid {
        let key = StationUid.key(value)
        let instance = StationUid.instances[key]

        if (instance) {
            throw Error("A station with this code already exists.")
        }

        if (instance == undefined) {
            instance = new StationUid(value)
            StationUid.instances[key] = instance
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
        [key: string]: StationUid | undefined
    } = {}
}