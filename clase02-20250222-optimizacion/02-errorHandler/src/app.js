import express from 'express';
import { router as heroesRouter } from './routes/heroesRouter.js';
import { errorHandler } from './middleware/errorHandler.js';
process.loadEnvFile("./src/.env")

// node --env-file ./src/.env app.js

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/heroes', heroesRouter)

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/prueba1',(req,res)=>{

    console.log(fafafa)

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/prueba2',async(req,res,next)=>{

    try {
        console.log(fafafa)
        
    } catch (error) {
            // res.setHeader('Content-Type','application/json');
            // return res.status(500).json({error:`error interno...`})
            return next(error)
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})


app.use(errorHandler)


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
