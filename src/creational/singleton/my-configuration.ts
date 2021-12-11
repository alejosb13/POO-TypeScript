import js from "./config.json"

// console.log(js);

export default class MyConfiguration {
    private constructor() {} // coloco el metodo privado para que no puedan instanciar la clase desde afuera
    
    private static Instance:MyConfiguration
    private static _enviroment:string
    private static _connectionString:string
    private static _apiUrl:string
    
    
    static getInstace():MyConfiguration{
        if(!this.Instance){
            this.inicialise()
            this.Instance = new MyConfiguration()
        }
        
        return this.Instance
    }
    
    private static inicialise(){
        this._apiUrl = js.apiUrl
        this._connectionString = js.connectionString
        this._enviroment = js.enviroment
    }
    
    static get enviroment():string{
        return this._enviroment
    }
    
    static get connectionString():string{
        return this._connectionString
    }
    
    static get apiUrl():string{
        return this._apiUrl
    }
}