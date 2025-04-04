import { Logger, Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  exports:[
    ProductosService
  ]
})
export class ProductosModule {
  constructor(){
    // console.log(process.env.MONGO_URL)
    Logger.debug(`MONGO URL (var entorno): ${process.env.MONGO_URL}`, "ProductosModulo")
  }
}
