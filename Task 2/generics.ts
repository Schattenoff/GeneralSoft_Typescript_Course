class Pair <KeyType, ValueType> {
    constructor(readonly key: KeyType, readonly value: ValueType) {
        this.key = key;
        this.value = value;
    }
}

class CustomMap <KeyType, ValueType> {
    private array: Pair<KeyType, ValueType>[] = [];

    toString() {
       this.arr.forEach(item => {
            `${item.key}->${item.value}`
        })
    }

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
        return this.array;
    }
}

interface City {
    title: string;
    population: number;
}

interface Country {
    capital: City;
    totalArea: number;
}

const moscow: City = {
    title: 'Moscow',
    population: 12506468
};

const minsk: City = {
    title: 'Minsk',
    population: 2009786
};

const russia: Country = {
    capital: moscow,
    totalArea: 17098246
};

const belarus: Country = {
    capital: minsk,
    totalArea: 207600
}

const myMap1 = new CustomMap<number, string>();
const myMap2 = new CustomMap<City, Country>();

myMap1.add(1, 'first');
myMap1.add(2, 'second');
myMap1.add(3, 'third');
myMap1.add(1, 'first again');
myMap1.remove(4);

console.log(myMap1.get(1));
console.log(myMap1.get(2));
console.log(myMap1.get(4));
console.log(myMap1.has(2));
console.log(myMap1.has(4));

myMap2.add(russia.capital, russia);
myMap2.add(belarus.capital, belarus);

console.log(myMap2.get(moscow));
console.log(myMap2.get(minsk));

console.log(`custom map output: ${myMap1}`);



