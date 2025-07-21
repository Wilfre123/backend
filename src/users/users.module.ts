import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Lot } from './users.lot';
import { Server } from './users.server';


@Module({
<<<<<<< Updated upstream
  imports: [TypeOrmModule.forFeature([Users])],  // Ensure the Users entity is included
=======
     imports: [
    TypeOrmModule.forFeature([Users, Lot, Server]),  // Add Lot to the TypeOrmModule.forFeature array
  ],
  
>>>>>>> Stashed changes
  controllers: [UsersController],
  providers: [UsersService],  // Make sure UsersService is provided here
})
export class UsersModule {}
