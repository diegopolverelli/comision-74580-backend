import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClienteDocument = HydratedDocument<Cliente>;
 
@Schema({
    strict:false,
    timestamps:true,
    // collection:"clientes2023",
})
export class Cliente {
  @Prop()
  name: string;

  @Prop()
  ctaCte: number;

  @Prop({
    type:String, 
    unique:true
  })
  cuit: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
