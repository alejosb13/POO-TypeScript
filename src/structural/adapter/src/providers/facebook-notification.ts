import INotification from "./notification.interface";

export default class FacebookNotification implements INotification {
    post(title:string,message:string):void {
        console.log(`Sending ${title} - ${message} - Facebook`);
    }
}