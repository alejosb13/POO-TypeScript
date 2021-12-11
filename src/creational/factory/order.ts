import PaymentType from "./enum/payment-type";
import PaymentMethodFactory from "./src/payment-method-factory";
import IPaymentMethod from "./src/payment-method.interface";

export default class Order  {
    paymentType?: IPaymentMethod
    commission:number = 0
    
    constructor(
        private type: PaymentType,
        public amount: number,
    ){ }
    
    create(){
        this.paymentType = PaymentMethodFactory.createPaymentType(this.type)
        this.commission = this.amount * this.paymentType.commission
        
    }
}