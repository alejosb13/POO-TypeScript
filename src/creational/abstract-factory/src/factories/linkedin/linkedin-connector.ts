import IConnector from "../connector.interface";


export default class LinkedinConnector implements IConnector  {
    open(): void {
        console.log("Conexion a Linkedin");
    }
    
    close(): void {
        console.log("cerrar conexion Linkedin");
           
    }
}