import fs from "fs"

console.log("cwd:",process.cwd())
console.log("process id:",process.pid)
console.log("platform", process.platform)
// console.log("Variables de entorno:", process.env)
console.log("Variable de entorno java home:", process.env.JAVA_HOME)
console.log("Argumento que lleguen x consola (CLI):" , process.argv)