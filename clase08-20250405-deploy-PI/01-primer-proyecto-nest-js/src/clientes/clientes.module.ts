import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { ProductosModule } from 'src/productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Cliente, ClienteSchema } from './schema/clienteSchema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: Cliente.name, schema: ClienteSchema}
    ]),
    ProductosModule
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
