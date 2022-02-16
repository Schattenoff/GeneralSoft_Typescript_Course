import { CustomMap } from "./CustomMap"
import { City, Country } from "./interfaces"

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
console.log(myMap1.arr);
myMap1.has(2);

myMap2.add(russia.capital, russia);
myMap2.add(belarus.capital, russia);
console.log(myMap2.arr)


