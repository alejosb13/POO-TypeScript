import SlackNotification from "./slack-notification";

export default class SlackAdapterNotification {
    constructor(private SlackNotification:SlackNotification) {}
    
    post(title:string, message:string){
        this.SlackNotification.send("FUVI Internal", title, message)
    }
}