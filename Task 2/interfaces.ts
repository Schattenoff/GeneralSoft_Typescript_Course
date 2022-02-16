interface City {
    title: string;
    population: number;
}

interface Country {
    capital: City;
    totalArea: number;
}

export {City, Country}