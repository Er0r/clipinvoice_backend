import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    credentials: true,
    allowedHeaders: 'origin, x-requested-with, accept, content-type, authorization',
  });

  app.use(cors());
  const port = process.env.APP_PORT || 3000;
  app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder()
    .setTitle('Clipinvoice')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .addTag('clipinvoice')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);
  await app.listen(port);
}
bootstrap();
