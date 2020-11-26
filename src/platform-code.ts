export class PlatformCode {
    value: string

    constructor(value: string) {
        const regex = RegExp('^[0-9]+[A-Z]?$')
        let isValid = regex.test(value)

        if (!isValid) {
            throw Error("Platform code must be one or many numerical digits, optionally followed by a single capital Latin letter A-Z")
        }

        this.value = value
    }

    toString(): string {
        return this.value.toString()
    }
}