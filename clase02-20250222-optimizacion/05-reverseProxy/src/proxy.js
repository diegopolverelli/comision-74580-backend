const express = require('express');
const {createProxyMiddleware} = require("http-proxy-middleware")
const PORT=3000

const app = express();

app.get("/config", (req, res)=>{
    res.send("Bienvenido al server Proxy...!!!")
})

const routes=[
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:3003"
]

const auth=(req, res, next)=>{
    let {user, password} =req.query
    if(user!="admin" || password!="123"){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Credenciales incorrectas`})
    }

    next()
}

let contador=0
// const cambio=()=>{
//     contador++
//     if(contador>2){
//         contador=0
//         return 0
//     }
//     return contador
// }

const cambio=()=>{
    contador++
    if(contador<5) return 0
    if(contador<7) return 1
    if(contador<8){
        return 2
    }else{
        contador=0
        return 0
    }
}

app.use(
    "/",
    auth,
    createProxyMiddleware({
        router: req=>routes[cambio()],
        // target: "http://localhost:3001",
        changeOrigin: true
    })
)

app.listen(PORT, ()=>console.log(`Server online in port ${PORT}!`));