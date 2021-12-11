import MyConfiguration from './my-configuration';
import { expect } from 'chai'
import  'mocha'

describe('La clase declarada debe ser la misma', () => {
    let MyConfig = MyConfiguration.getInstace()
    
    it("Mi clase debe devolver una instancia",()=>{
        expect(MyConfig !== null).to.equal(true)
    })

    it("Dos o mas variables que tengan la clase MyConfiguration deben ser iguales",()=>{
        let MyConfig2 = MyConfiguration.getInstace()
        
        expect(MyConfig == MyConfig2).to.equal(true)
    })

    it("Que el entorno actual sea de desarrollo",()=>{
        let MyConfigEnviroment = MyConfiguration.enviroment
        
        expect(MyConfigEnviroment == "development").to.equal(true)
    })
});