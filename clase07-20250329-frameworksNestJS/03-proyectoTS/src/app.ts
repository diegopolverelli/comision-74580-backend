import express, { Response } from 'express';
import mongoose from 'mongoose';
import { getCodigo } from './utils/utils';
const PORT=3001;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',async(req,res:Response)=>{

    let codigo:number=await getCodigo()
    console.log(codigo)

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}...!!! ****`);
});
