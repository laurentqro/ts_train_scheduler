export class OperatorUid {
    private constructor(private value: string) {
        const regex = RegExp('^[A-Z]{3}$')
        let isValid = regex.test(value)

        if (!isValid) {
            throw Error("Operator UID must be 3 capital Latin letters in the A-Z range")
        }
    }

    public static new(value: string): OperatorUid {
        let key = OperatorUid.key(value)
        let instance = OperatorUid.instances[key]

        if (instance == undefined) {
            instance = new OperatorUid(value)
            OperatorUid.instances[key] = instance
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
        [key: string]: OperatorUid | undefined
    } = {}
}