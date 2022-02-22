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

export {Product, Category}
