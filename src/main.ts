import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException, HttpStatus } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

<<<<<<< Updated upstream
  const whitelist = [
    'http://192.168.43.64:8080',
    'http://192.168.0.105:8080',
    'http://localhost:8080',
  ];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(
          new HttpException(`CORS not allowed for origin ${origin}`, HttpStatus.FORBIDDEN),
          false
        );
      }
    },
    credentials: true,
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(3000);
  console.log('Server running on http://localhost:3000');
}

bootstrap();
=======
  app.enableCors({
    origin: '*',  // Allow all origins (for dev only; restrict in prod)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  });

  await app.listen(3000, '0.0.0.0'); // Listen on all network interfaces
  console.log('Server running on http://0.0.0.0:3000');
}

bootstrap().catch(console.error);
>>>>>>> Stashed changes
