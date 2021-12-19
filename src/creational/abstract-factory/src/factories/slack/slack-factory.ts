import IAbstractFactory from "../../abstract-factory.interface";
import IConnector from "../connector.interface";
import IPublisher from "../publisher.interface";
import SlackConnector from "./slack-connector";
import SlackPublisher from "./slack-publisher";


export default class SlackFactory implements IAbstractFactory{
    
    getConnector():IConnector{
        return new SlackConnector()
    }
    
    getPublisher(connector: IConnector): IPublisher{
        return new SlackPublisher(connector);
    }
}