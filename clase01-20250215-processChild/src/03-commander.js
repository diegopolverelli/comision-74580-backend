import {Command, Option} from "commander"

const programa=new Command()

programa.option("-p, --port <PORT>", "Puerto donde escuchará el server", 3000)
// programa.option("-u, --user <USER>", "Puerto donde escuchará el server")
programa.option("-d, --debug", "Activa el modo debug")
programa.option("-c, --colores [COLORES...]", "Listado de colores")
programa.requiredOption("-u, --user <USUARIO>", "Usuario que ejecuta el script")
programa.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["prod", "test", "dev"]).default("prod"))



programa.parse()
let opts=programa.opts()
console.log(opts)

const {port:PORT}=opts

console.log(`Server running on port ${PORT}`)