import dotenv from "dotenv"
import {Command, Option} from "commander"

const programa=new Command()

programa.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["prod", "dev"]).default("prod"))

programa.parse()

let {mode}=programa.opts()

dotenv.config({
    path:mode=="prod"?"./src/.env.prod":"./src/.env.dev", 
    override:true
})

export const config={
    PORT: process.env.PORT, 
    MONGO_URL: process.env.MONGO_URL
}