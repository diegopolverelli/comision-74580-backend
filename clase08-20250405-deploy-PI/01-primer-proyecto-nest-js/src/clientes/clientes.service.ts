import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ProductosService } from '../productos/productos.service';
import { Model } from 'mongoose';
import { Cliente } from './schema/clienteSchema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClientesService {
  clientes:any[]=[{id:1, name:"Cliente 001"}]

  constructor(
    @InjectModel(Cliente.name) private clienteModel: Model<Cliente>,
    private readonly productosService: ProductosService
  ){}

  create(createClienteDto: CreateClienteDto) {
    return this.clienteModel.create(createClienteDto)
    // return 'This action adds a new cliente';
  }

  findAllAndProducts(){
    let productos=this.productosService.findAll()
    let clientes=this.clientes

    return {productos, clientes}
  }

  findAll() {
    // return `This action returns all clientes`;
    return this.clienteModel.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
