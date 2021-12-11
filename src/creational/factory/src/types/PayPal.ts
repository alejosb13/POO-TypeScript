import IPaymentMethod from "../payment-method.interface";

export default class PayPal implements IPaymentMethod  {
    
    get commission():number{
        return 0.04
    }
}