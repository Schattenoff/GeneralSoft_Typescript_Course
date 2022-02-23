enum Category {
    phones = 'phones',
    laptops = 'laptops',
    watches = 'watches'
}

class Product {
    private idProduct: number;

    constructor(readonly price: number, readonly category: Category, readonly title: string) {
        this.idProduct = Product.generationID();
    }
    private static generationID() : number {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }

    get id() {
        return this.idProduct;
    }
}

class User {
    private basket : Product[] = [];

    addToBasket(things : Product | Product[]) : void {
        //Product Array
        if (Array.isArray(things)) {
            things.forEach((thing : Product) => {
                this.addToBasketThing(thing);
            })
        } else {
            //Product One
            this.addToBasketThing(things);
        }
    }

    addToBasketThing(thing : Product) {
        if (this.checkID(thing)) {
            console.log(`You already have ${thing.title} in your basket`);
        } else {
            this.basket.push(thing);
        }
    }

    private checkID(thing : Product) : boolean {
        return this.basket.some(element => element.id === thing.id);
    } 

    getProductsByCategory(category : Category) : Product[] {
        return this.basket.filter(element => element.category === category);
    }

    getMostExpensiveProduct() {
        return this.basket.reduce((previousValue, currentValue) => previousValue.price > currentValue.price ? previousValue : currentValue);
    }

    getMostInexpensiveProduct() {
        return this.basket.reduce((previousValue, currentValue) => previousValue.price < currentValue.price ? previousValue : currentValue);
    }

    removeProduct(id : number) {
        this.basket.splice(this.basket.findIndex(item => item.id === id), 1);
    }

    calculateTotalPrice() : number {
        return this.basket.reduce((total : number, product : Product) => total + product.price, 0);
    }

    buy() : void {
        this.basket = [];
        console.log('Thanks for buying. Enjoy your shopping!');
    }
}

const iPhone = new Product(1500, Category.phones, 'iPhone');
const galaxyNote = new Product(500, Category.phones, 'Galaxy Note');
const macBookPro = new Product(2500, Category.laptops, 'MacBook Pro');
const lenovo = new Product(800, Category.laptops, 'lenovo');
const appleWatch = new Product(500, Category.watches, 'Apple Watch');
const galaxyWatch = new Product(300, Category.watches, 'Galaxy Watch');

const user = new User();

user.addToBasket(iPhone);
user.addToBasket([galaxyNote, macBookPro, galaxyWatch]);
user.addToBasket([lenovo, galaxyNote, appleWatch]);

console.log(user.calculateTotalPrice());

user.removeProduct(user.getMostExpensiveProduct().id);

console.log(user.calculateTotalPrice());

console.log(user.getProductsByCategory(Category.phones));
console.log(user.getMostInexpensiveProduct().title);

user.buy();
