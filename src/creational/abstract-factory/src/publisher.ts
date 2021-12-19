import IAbstractFactory from "./abstract-factory.interface";

export class Publisher {
    constructor(public content:string){}
    
    send(PublishAbstractFactory:IAbstractFactory){
        let Conexion = PublishAbstractFactory.getConnector()
        let Publicacion = PublishAbstractFactory.getPublisher(Conexion)
        
        Conexion.open
        Publicacion.publish(this.content)
        Conexion.close
    }
} 