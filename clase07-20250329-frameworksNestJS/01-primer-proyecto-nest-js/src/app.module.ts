import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {
  constructor(){
    console.log(`Hola desde AppModule`)
  }
}
