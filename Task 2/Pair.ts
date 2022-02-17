class Pair <KeyType, ValueType> {
    public key: KeyType;
    public value: ValueType;

    constructor(key: KeyType, value: ValueType) {
        this.key = key;
        this.value = value;
    }
}

export {Pair}