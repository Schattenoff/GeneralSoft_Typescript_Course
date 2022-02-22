import { Product, Category } from './Product';
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

    addToBasketThing(thing) {
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

    calculateTotalPrice() {
        return this.basket.reduce((first, second) => first.price + second.price);
    }

    buy() : void {
        this.basket = [];
        console.log('Thanks for buying. Enjoy your shopping!');
    }
}

export {User}