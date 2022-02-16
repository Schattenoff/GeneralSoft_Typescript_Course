import { Pair } from "./Pair";

class CustomMap <KeyType, ValueType> {
    arr: Pair<KeyType, ValueType>[] = [];

    add(key: KeyType, value: ValueType): void {
        this.arr.push(new Pair(key, value));
    }
    
    remove(key: KeyType): void {
        this.arr.slice();
    }

    get(key: KeyType) {
        
    }

    has(key: KeyType) {
        
    }
}

export {CustomMap}

