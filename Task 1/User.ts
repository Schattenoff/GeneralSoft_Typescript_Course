import { Product, Category } from './Product';
class User {
    basket : Product[] = [];

    addToBasket(things : Product | Product[]) : void {
        //Product Array
        if (Array.isArray(things)) {
            things.forEach((thing : Product) => {
                if (this.checkID(thing)) {
                    console.log(`You already have ${thing.title} in your basket`);
                } else {
                    this.basket.push(thing);
                }
            })
        } else {
            //Product One
            if (this.checkID(things)) {
                console.log(`You already have ${things.title} in your basket`);
            } else {
                this.basket.push(things);
            }
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
        let totalPrice : number[] = [];
        this.basket.forEach((item, index) => { 
            totalPrice[index] = item.price;
        })
        return totalPrice.reduce((sum, current)=> sum += current);
    }


    buy() : void {
        this.basket = [];
        console.log('Thanks for buying. Enjoy your shopping!');
    }
}

export {User}