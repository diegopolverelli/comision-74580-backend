import { BadRequestException, Body, Controller, Get, Logger, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

interface BodyUsuarios{
  nombre:string, 
  apellido:string
}

@Controller("api/pruebas")
export class AppController {
  constructor(private readonly appService: AppService) {}



  @Post("usuarios")
  usuario(@Body() datos:BodyUsuarios){
    console.log(datos)
    // return this.appService.getUsuarios()
    return this.appService.creaUsuario(datos)
  }

  @Get("saludo")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("suma/:a/:b")
  suma(@Param("a") sumando1:number, @Param("b") sumando2:number, @Query("nombre") nombre:string):number{
    // sumando2="Pedro"
    // nombre=false
    Logger.debug(nombre)

    sumando1=Number(sumando1)
    sumando2=Number(sumando2)
    if(isNaN(sumando1) || isNaN(sumando2)){
      throw new BadRequestException(`Los argumentos deben ser numéricos`)
    }
    return sumando1+sumando2
  }


  @Get("suma2/:a/:b")
  suma2(@Param("a", ParseIntPipe) sumando1:number, @Param("b", ParseIntPipe) sumando2:number, @Query("nombre") nombre:string):number{
    // sumando2="Pedro"
    // nombre=false
    Logger.debug(nombre)

    // sumando1=Number(sumando1)
    // sumando2=Number(sumando2)
    if(isNaN(sumando1) || isNaN(sumando2)){
      throw new BadRequestException(`Los argumentos deben ser numéricos`)
    }
    return sumando1+sumando2
  }

  
}
