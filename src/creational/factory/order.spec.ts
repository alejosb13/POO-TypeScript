import { expect } from "chai";
import "mocha";

import Order from "./order";
import PaymentType from "./enum/payment-type";

import Visa from "./src/types/Visa";
import MasterCard from "./src/types/MasterCard";
import PayPal from "./src/types/PayPal";


let order1 = new Order(PaymentType.Visa, 100),
    order2 = new Order(PaymentType.Mastercard, 100),
    order3 = new Order(PaymentType.PayPal, 100);
    
    order1.create();
    order2.create();
    order3.create();

describe("Orden - Visa", () => {
    it("La instancia debe ser de Visa", () => {
        expect(true).to.equal(order1.paymentType instanceof Visa);
    });

    it("La comision de la orden debe ser de 3", () => {
        expect(3).to.equal(order1.commission);
    });
});

describe("Order - Mastercard", () => {
    it("La instancia debe ser de MasterCard", () => {
        expect(true).to.equal(order2.paymentType instanceof MasterCard);
    });

    it("La comision de la orden debe ser de 5", () => {
        expect(5).to.equal(order2.commission);
    });
});

describe("Order - PayPal", () => {
    it("La instancia debe ser de PayPal", () => {
        expect(true).to.equal(order3.paymentType instanceof PayPal);
    });

    it("La comision de la orden debe ser de 4", () => {
        expect(4).to.equal(order3.commission);
    });
});