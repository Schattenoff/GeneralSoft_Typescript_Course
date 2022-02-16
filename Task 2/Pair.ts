class Pair <KeyType, ValueType> {
    key: KeyType;
    value: ValueType;

    constructor(key: KeyType, value: ValueType) {
        this.key = key;
        this.value = value;
    }
}

export {Pair}