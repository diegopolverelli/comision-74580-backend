export const getCodigo=async()=>{
    // procesas algo para lo que necesitas await


    return 990007

}

type HeroeType={
    name:string, 
    alias:string,
    id:number
}

interface HeroeInterface{
    name:string, 
    alias:string,
    id:number
}

class Heroe{
    name:string
    alias:string

    constructor(name:string, alias:string){
        this.name=name
        this.alias=alias
    }
}

export const getHeroe=()=>{
    let heroe:HeroeInterface
    heroe={
        name:"Batman", 
        alias:"Bruce Wayne", 
        id: 1
    }

    let heroe2:HeroeType={
        name: "Robin",
        alias: "D.Grayson",
        id: 2
    }

    let heroe3:Heroe
    heroe3={
        name: "Hulk",
        alias: "B.Banner",
    }

    return heroe
}