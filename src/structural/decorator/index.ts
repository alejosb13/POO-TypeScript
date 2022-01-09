import { BasePrice } from "./src/base-price";
import Cliente from "./src/customer";
import { SpecialPriceDecorator } from "./src/decorators/special-price.decorator";
import { VipPriceDecorator } from "./src/decorators/vip-customer.decorator";
import { TypeCustomer } from "./src/enum/type-customers.enum";
import { Product } from "./src/product";

let IsFreeBuy:boolean = true
let customer = new Cliente("Alejandro Sanchez",IsFreeBuy,TypeCustomer.VIP);
let product = new Product("Notebook",1800);
let price = new BasePrice()

if(customer.type == TypeCustomer.VIP){
    price = new VipPriceDecorator(price)
}

if(customer.type == TypeCustomer.VIP){
    price = new SpecialPriceDecorator(price)
}


let totalPrice = product.setSpecialPrice(price.calculate(product.price))

console.log(product)