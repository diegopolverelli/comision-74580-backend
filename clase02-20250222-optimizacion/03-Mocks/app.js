import {fakerES_MX as faker} from "@faker-js/faker"
import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/clientes',(req,res)=>{

    let {cantidad}=req.query
    if(!cantidad) cantidad=1
    let clientes=[]
    for(let i=0; i<cantidad; i++){
        let cliente=generaCliente()
        clientes.push(cliente)
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({clientes});

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


// console.log("animal", faker.animal.horse())
// console.log("perro", faker.animal.dog())
// console.log("producto", faker.commerce.product())
// let nombre=faker.person.firstName("female")
// console.log("nombre", nombre)
// let apellido=faker.person.lastName()
// console.log("apellido", apellido)
// console.log("email", faker.internet.email({firstName:nombre, lastName: apellido}))


const generaCliente=()=>{
    let nombre=faker.person.firstName("female")
    let apellido=faker.person.lastName()
    let email=faker.internet.email({firstName:nombre, lastName: apellido})
    let dni=faker.number.int({min:9_000_000, max:53_000_000})
    return {
        nombre, apellido, email, dni
    }
}

// console.log(generaCliente())