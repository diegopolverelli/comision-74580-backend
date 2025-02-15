// node --env-file ./src/.env app.js    // alternativas a dotenv
// process.loadEnvFile("./src/.env")    // ruta relativa    vs ruta absoluta c:\documentos\...

// console.log(process.env.PORT)
// console.log(process.env.MONGO_URL)
// console.log(process.env.DB_NAME)
// console.log(process.env.SECRET)

import express from 'express';
import { config } from './config/04-config.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT} - process id: ${process.pid}`);
});
