import { Router } from 'express';
import HeroesManager from '../manager/HeroesManager.js'
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{


    res.status(200).render('home')
})

router.get('/heroes',(req,res)=>{
    req.logger.informes(`Ingreso a /heroes`)

    if(req.query.nombre=="Juan"){
        req.logger.grave(`Intento de ingreso no permitido`)
    }

    let heroes
    try {
        heroes=heroesManager.getHeroes()
    } catch (error) {
        console.log(error.message)
    }

    res.status(200).render('heroes', {
        heroes
    })
})