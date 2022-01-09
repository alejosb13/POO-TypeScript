import INotification from "../providers/notification.interface";


export default class NotificationService {
    constructor(private providers:INotification[] ) {}
    
    
    post(title:string, message:string){
        this.providers.map((provider)=>{
            provider.post(title, message)
        })
    }
}