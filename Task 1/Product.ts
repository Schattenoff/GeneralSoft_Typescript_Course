enum Category {
    phones = 'phones',
    laptops = 'laptops',
    watches = 'watches'
}


class Product {
    private _id: number;
    price : number;
    category : any;
    title: string;

    constructor(Price: number, Category: any, Title: string) {
        this.price = Price;
        this.category = Category;
        this.title = Title;
        this._id = Product.generationID();
    }
    private static generationID() : number {
        let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
        return id;
    }

    get id() {
        return this._id;
    }
}

export {Product, Category}
