import IConnector from "../connector.interface";



export default class SlackConnector implements IConnector{
    
    open(): void {
        console.log("Conection Slack");
    }
    
    close(): void {
        console.log(" close Conection Slack");
    }
}