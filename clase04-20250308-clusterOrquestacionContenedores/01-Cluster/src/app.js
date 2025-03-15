import express from 'express';
import cluster from "cluster"
import os from "os"
import { router as pruebasRouter } from './routes/pruebaRouter.js';

// console.log(os.cpus())


if(cluster.isPrimary){
    console.log(`Mi compu tiene ${os.cpus().length} nucleos` )
    console.log(`Proceso primario activo | realizando copias del server `)
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
    for(let i=0; i<os.cpus().length; i++){
        cluster.fork()
    }
}else{
    const PORT=3000;

    const app=express();
    
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    
    app.use("/", pruebasRouter)
    
    let visitas=0
    app.get('/',(req,res)=>{
        visitas++
        res.setHeader('Content-Type','text/plain');
        res.status(200).send(`Visitas: ${visitas}`);
    })
    
    const server=app.listen(PORT,()=>{
        console.log(`Server escuchando en puerto ${PORT} - pid: ${process.pid} - worker ${cluster.worker.id}`);
    });
    
}

