import { Router } from 'express';
export const router=Router()
import HeroesManager from '../manager/HeroesManager.js'
import { CustomErrors } from '../utils/CustomErrors.js';
import { errorAltaHeroe } from '../utils/HeroesError.js';
import { TIPOS_ERROR } from '../utils/EErros.js';

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{

    let heroes=heroesManager.getHeroes()

    res.status(200).json({heroes})
})

router.post('/',(req,res)=>{
    let {name}=req.body
    if(!name){
        // res.setHeader('Content-Type','application/json');
        // return res.status(400).json({error:`Complete al menos el name`})
        CustomErrors.createError("Error Post Heroe", errorAltaHeroe(req.body), "No se recibe name", TIPOS_ERROR.ARGUMENTOS_INVALIDOS)
    }

    let propiedadesValidas=['name','alias','publisher','powers','team']
    let propiedadesHeroeNuevo=Object.keys(req.body)
    let valido=propiedadesHeroeNuevo.every(prop=>propiedadesValidas.includes(prop))

    if(!valido){
        // res.setHeader('Content-Type','application/json');
        // return res.status(400).json({error:`Ha ingresado propiedades invalidas`, detalle:propiedadesValidas})
        CustomErrors.createError("Error Post Heroe", errorAltaHeroe(req.body), "Error argumentos opcionales", TIPOS_ERROR.ARGUMENTOS_INVALIDOS)
    }

    let heroes=heroesManager.getHeroes()
    let existe=heroes.find(heroe=>heroe.name.toLowerCase()===name.toLowerCase())
    if(existe){
        // res.setHeader('Content-Type','application/json');
        // return res.status(400).json({error:`El heroe ${name} ya existe en DB`})
        CustomErrors.createError("Error Post Heroe", `El heroe ${name} ya existe en DB`, "Heroe repetido", TIPOS_ERROR.ARGUMENTOS_INVALIDOS)

    }

    let id=1
    if(heroes.length>0){
        id=heroes[heroes.length-1].id+1
    }

    let heroeNuevo=heroesManager.createHeroe({id, ...req.body})

    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:heroeNuevo});

})