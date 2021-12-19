import IConnector from "../connector.interface";
import IPublisher from "../publisher.interface";

export default class SlackPublisher implements IPublisher{
    constructor(public connector:IConnector){}
    publish(content: string): void {
        console.log("Slack");
        console.log(content);
    }
}