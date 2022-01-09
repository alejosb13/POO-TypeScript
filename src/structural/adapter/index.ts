import FacebookNotification from "./src/providers/facebook-notification";
import INotification from "./src/providers/notification.interface";
import SlackAdapterNotification from "./src/providers/slack-adapter-notification";
import SlackNotification from "./src/providers/slack-notification";
import NotificationService from "./src/services/notification.service";

let providers:INotification[] = [
    new FacebookNotification(),    
    new SlackAdapterNotification(new SlackNotification()),    
];

let Notification = new NotificationService(providers)
Notification.post("Malas noticias en Venezuela","Los cortes electricos aumentaros por razones desconocidas. Esperamos noticias sobre los motivos.")