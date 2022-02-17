import { Pair } from "./Pair";
class CustomMap <KeyType, ValueType> {
    private _arr: Pair<KeyType, ValueType>[] = [];

    add(key: KeyType, value: ValueType): void {
        if(this.has(key)) { 
            console.log(`You already have pair with key ${key}`);
        } else {
            this.arr.push(new Pair(key, value));
        }
    }
    
    remove(key: KeyType) {
        if(this.has(key)){
            this.arr.forEach((item, index) => {
                if(item.key === key) {
                    this.arr.splice(index, 1);
                }
            })
        } else {
            console.log(`Pair with key ${key} doesn't exist`);
        }
    }

    get(key: KeyType) {
        if(this.has(key)){
            let [array] = this.arr.filter(item => item.key === key)
            return array.value;
        } else {
            return `Pair with key ${key} doesn't exist`;
        }
    }

    has(key: KeyType): boolean {
        return this.arr.some(item => item.key === key);
     }

    get arr() : Pair<KeyType, ValueType>[] {
        return this._arr;
    }
}

export {CustomMap}

