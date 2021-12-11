import PaymentType from "../enum/payment-type";
import PayPal from "./types/PayPal";
import MasterCard from "./types/MasterCard";
import Visa from "./types/Visa";
import IPaymentMethod from "./payment-method.interface";


export default class PaymentMethodFactory  {
    
    static createPaymentType(type:PaymentType ):IPaymentMethod{
        if(type == PaymentType.Mastercard){
            return new MasterCard()
        }
        
        if(type == PaymentType.Visa){
            return new Visa()
        }
        
        if(type == PaymentType.PayPal){
            return new PayPal()
        }
        
        throw new Error("Invalid payment method type.");
    }
}