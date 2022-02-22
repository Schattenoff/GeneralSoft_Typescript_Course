import { Product, Category } from './Product';
import { User } from './User';

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

