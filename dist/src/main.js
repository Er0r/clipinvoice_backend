"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET, PUT, POST, DELETE',
        credentials: true,
        allowedHeaders: 'origin, x-requested-with, accept, content-type, authorization',
    });
    app.use(cors());
    const port = process.env.APP_PORT || 3000;
    app.setGlobalPrefix('api/v1');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Clipinvoice')
        .setDescription('API Documentation')
        .setVersion('1.0')
        .addTag('clipinvoice')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/v1/docs', app, document);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map