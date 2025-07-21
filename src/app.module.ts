import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { Lot } from './users/users.lot';
import { Server } from './users/users.server';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
   
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '../../survey_frontend'),
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'survey',
<<<<<<< Updated upstream
      entities: [Users],
      synchronize: false, // Set to false in production
    }),
    UsersModule,
    Users,
=======
      entities: [Users, Lot, Server], 
      synchronize: false, 
    }),
    
    UsersModule, 
>>>>>>> Stashed changes
  ],
})
export class AppModule {}
