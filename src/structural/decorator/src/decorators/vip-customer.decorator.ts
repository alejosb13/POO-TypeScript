import { IDiscount } from "../interfaces/discount.interface";

export class VipPriceDecorator implements IDiscount {
    constructor(private readonly decorator: IDiscount) { }

    private readonly discountAmount: number = 0.02;

    calculate(input: number): number {
        console.log(`${this.constructor.name} discount applied.`);

        input = (input * (1 - this.discountAmount));

        return this.decorator.calculate(input);
    }
}