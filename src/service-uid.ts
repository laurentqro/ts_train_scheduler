export class ServiceUid {
    private static lastUid: number = 1
    value: number

    constructor() {
        this.value = ServiceUid.lastUid++
    }

    toString(): string {
        return this.value.toString()
    }
}