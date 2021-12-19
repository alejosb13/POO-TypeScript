import IConnector from "../connector.interface";

export default class FacebookConnector implements IConnector {
    open(): void {
        console.log("Conexion a Facebook");
    }
    
    close(): void {
        console.log("cerrar conexion Facebook");
    }
}