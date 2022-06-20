import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaService } from '../src/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const prismaService = app.get(PrismaService);
  // await prismaService.enableShutdownHooks(app);

  // swagger
  const config = new DocumentBuilder()
    .setTitle(`swagger nestjs`)
    .setDescription('Demo API Application')
    .setVersion('v1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
