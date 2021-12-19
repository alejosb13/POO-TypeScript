import IConnector from "../connector.interface";
import IPublisher from "../publisher.interface";

export default class FacebookPublisher implements IPublisher {
    constructor(private connector: IConnector) { }

    publish(content: string): void {
        // Your logic to publish on Facebook
        console.log("Facebook");
        console.log(content);
    }

}