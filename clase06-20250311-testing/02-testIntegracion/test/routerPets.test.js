import {expect} from "chai"
import {describe, it} from "mocha"
import supertest from "supertest"
import mongoose, { isValidObjectId } from "mongoose"

try {
    await mongoose.connect('mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comis75480clase06')
} catch (error) {
    console.log(`Error al conectar a DB`)    
}

const requester=supertest("http://localhost:8080")

describe("Pruebas router pets", function(){
    this.timeout(10000)

    describe("Pruebas básicas", ()=>{
        // analizar si necesito usar after, before, etc...

        after(async()=>{
            await mongoose.connection.collection("pets").deleteMany({specie:"testing20250322"})
        })

        it("Si ejecuto la ruta /api/pets, metodo POST, graba una mascota en DB", async()=>{
            let petMock={name:"Marshall", specie:"testing20250322", birthDate:"2019-02-12"}

            // let resultado=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)
            let {body}=await requester.post("/api/pets").send(petMock)

            expect(body).to.has.property("status").and.to.be.eq("success")
            expect(body.status).to.be.ok
            expect(body.payload).to.has.property("_id")
            expect(body.payload).to.has.property("name").and.to.be.eq(petMock.name)
            expect(body.payload).to.has.property("specie").and.to.be.eq(petMock.specie)
            expect(isValidObjectId(body.payload._id)).to.be.true

            let resultado=await mongoose.connection.collection("pets").findOne({specie:"testing20250322"})
            expect(resultado).to.has.property("_id")
        })

        it("Si ejecuto la ruta /api/pets, metodo POST, retorna un status http 200", async()=>{
            let petMock={name:"Marshall", specie:"testing20250322", birthDate:"2019-02-12"}

            // let resultado=await requester.post("/api/pets").send(petMock)
            // console.log(resultado)
            let {statusCode}=await requester.post("/api/pets").send(petMock)

            expect(statusCode).to.be.eq(200)
        })

    })

    describe("Pruebas completas", ()=>{
        it("Prueba zzz", ()=>{
            expect(1).to.be.eq(1)
        })
    })

})