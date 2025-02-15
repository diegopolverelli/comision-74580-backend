
let [,, ...argumentos] = process.argv   // aquí los ... son el operador rest

// console.log(argumentos)

let indicePort=argumentos.findIndex(a=>a=="--port")
if(indicePort==-1){
    console.log(`Error: arg. --port es requerido`)
    process.exit()
}

console.log(`Server on line en puerto ${argumentos[indicePort + 1]}`)
