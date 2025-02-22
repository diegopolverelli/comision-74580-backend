import os from "os"

export const errorAltaHeroe=heroe=>{

    let {name, ...otros}=heroe   // ... son aquí el operador rest

    return `
Error al dar de alta un heroe.
Propiedades requeridas:
    -name, de tipo string: se recibió ${name} de tipo ${typeof name}
Propiedades opcionales:
    - alias, powers, publisher, team: se recibió ${JSON.stringify(otros)}

Hora: ${new Date().toLocaleString()}
Usuario: ${os.userInfo().username}
PC: ${os.hostname()}
`
}