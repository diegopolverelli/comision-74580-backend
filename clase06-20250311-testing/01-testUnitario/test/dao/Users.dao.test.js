import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose";
import {expect, should} from "chai"
import {describe, it} from "mocha"
should()


try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comis75480clase06')
} catch (error) {
    console.log(`Error al conectar a DB`)    
}

const usersDAO=new Users()


describe("Test dao Users", function(){
    // x default toman 2seg. de timeout
    this.timeout(8000)

    // before, after, beforeEach, afterEach

    afterEach(async()=>{
        // console.log("ejecuto el arterEach")
        await mongoose.connection.collection("users").deleteMany({email:"test20250322@test.com"})
    })

    it("El dao de usuarios al ejecutar el método get deberá retornar un array", async()=>{
        let resultado=await usersDAO.get()

        // Object.keys
        // Object.values

        expect(Array.isArray(resultado)).to.be.true
        expect(Array.isArray(resultado)).to.be.equal(true)
    })

    it("El dao de usuarios al ejecutar el método get deberá retornar un array de usuarios", async()=>{
        let resultado=await usersDAO.get()

        // Object.keys
        // Object.values

        expect(Array.isArray(resultado)).to.be.true
        expect(Array.isArray(resultado)).to.be.equal(true)
        if(Array.isArray(resultado)){
            resultado.forEach(u=>{
                // console.log("Ingreso...!!!")
                expect(u).to.have.property("_id")
                expect(isValidObjectId(u._id)).to.be.true
                expect(u).to.have.property("email")
                expect(u).to.have.property("first_name")
            })
        }
    })

    it("El dao, si ejecuto el método save, graba un usuario en DB", async()=>{
        let userMock={
            first_name:"Juan", 
            last_name:"Paez", 
            email: "test20250322@test.com",
            password: "123"
        }

        let resultado=await usersDAO.save(userMock)

        expect(resultado).to.has.property("_id")
        expect(resultado).to.has.property("email").and.to.be.eq(userMock.email)

    })
})

