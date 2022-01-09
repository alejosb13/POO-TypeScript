export default class SlackNotification {
    send(channel: string, title:string, message:string):void{
        console.log(`Sending ${title} - ${message} - Channel to ${channel}`);
    }
}


