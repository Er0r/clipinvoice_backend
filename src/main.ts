import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.APP_PORT || 3000;
  app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder()
  .setTitle('Clipinvoice')
  .setDescription('API Documentation')
  .setVersion('1.0')
  .addTag('clipinvoice')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document);
  await app.listen(port);
}
bootstrap();
