export class TrackUid {
    value: string

    constructor(value: string) {
        const regex = RegExp('^[0-9]{9}$')
        let isValid = regex.test(value)

        if (!isValid) {
            throw Error("Track UID must be exactly nine decimal digits")
        }

        this.value = value
    }
}