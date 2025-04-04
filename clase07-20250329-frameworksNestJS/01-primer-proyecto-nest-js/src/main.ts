import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT=process.env.PORT ?? 3000
  let app:INestApplication<any> = await NestFactory.create(AppModule);
  // app=109
  await app.listen(PORT);
  Logger.debug(`Server escuchando en puerto ${PORT}`, "App Principal")
}
bootstrap();
