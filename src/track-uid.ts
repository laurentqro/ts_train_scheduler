export class TrackUid {
    private value: string

    constructor(value: string) {
        const regex = RegExp('^[0-9]{9}$')
        let isValid = regex.test(value)

        if (!isValid) {
            throw Error("Track UID must be exactly nine decimal digits")
        }

        this.value = value
    }

    toString(): string {
        return this.value.toString()
    }
}