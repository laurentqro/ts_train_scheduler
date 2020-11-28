export class TrackUid {
    private static key(value: string): string {
        return value.toString()
    }

    private static instances: {
        [key: string]: TrackUid | undefined
    } = {}

    private constructor(private value: string) {
        const regex = RegExp('^[0-9]{9}$')
        let isValid = regex.test(value)

        if (!isValid) {
            throw Error("Track UID must be exactly nine decimal digits")
        }
    }

    toString(): string {
        return this.value.toString()
    }

    public static new(value: string): TrackUid {
        let key = TrackUid.key(value)
        let instance = TrackUid.instances[key]

        if (instance) {
            throw Error("Track with this UID already exists")
        }

        if (instance == undefined) {
            instance = new TrackUid(value)
            TrackUid.instances[key] = instance
        }

        return instance
    }
}