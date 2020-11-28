export class TrainUid {
    constructor(value: string) {
        const regex = RegExp('^[0-9]{6}$')
        let isValid = regex.test(value)

        if (!isValid) {
            throw Error("Train UID must be exactly six decimal digits")
        }
    }
}