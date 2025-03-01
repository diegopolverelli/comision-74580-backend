import { fileURLToPath } from 'url';
import { dirname } from 'path';

import winston from "winston"
process.loadEnvFile("./src/.env")

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

// silly, verbose, http, debug, info, warning, error

const niveles={
    levels:{grave:0, medio:1, leve:2, informes: 3},
    colors:{grave:"red", medio: "yellow", leve: "green", informes: "blue" }
}

const transporteConsola=new winston.transports.Console({
    level: "informes",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize({
            colors: niveles.colors
        }),
        winston.format.simple()
    )
})

const transporteArchivo=new winston.transports.File({
    filename: "./src/logs/error.log",
    level: "grave",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    )
})

// if(process.env.MODE=="production"){}

export const logger = winston.createLogger(
    {
        levels: niveles.levels,
        // levels: {grave:0, medio:1, leve:2, info: 3},
        transports: [
            transporteArchivo
        ]
    }
)

if(process.env.MODE=="dev"){
    logger.add(transporteConsola)
}


export const middLogs=(req, res, next)=>{
    req.logger=logger

    next()
}