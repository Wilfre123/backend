import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
<<<<<<< Updated upstream

@Injectable()
export class UsersService {
  cornerRepository: any;
=======
import { UpdateDataDto } from './dto/create_user.dto';
import { Lot } from './users.lot';
import { Server } from './users.server';

@Injectable()
export class UsersService {


  Repository: any;
>>>>>>> Stashed changes
  create(body: Partial<Users>) {
    throw new Error('Method not implemented.');
  }
  constructor(

    @InjectRepository(Lot)
    private readonly lotRepository: Repository<Lot>,

    @InjectRepository(Users)
<<<<<<< Updated upstream
    private readonly usersRepository: Repository<Users>,  // Injecting the repository
=======
     private readonly usersRepository: Repository<Users>,  

     @InjectRepository(Server)
    private readonly serverRepository: Repository<Server>

>>>>>>> Stashed changes
  ) {}



  
  async upsertServer(serverValue: string): Promise<Server> {
    let server = await this.serverRepository.findOne({ where: { id: 1 } });

    if (!server) {
      server = this.serverRepository.create({ id: 1, server: serverValue });
    } else {
      server.server = serverValue;
    }

    return this.serverRepository.save(server);
  }
<<<<<<< Updated upstream
=======





async findByLotId(id: number): Promise<Users[]> {
  const users = await this.usersRepository.find({
    where: { lot: { id } },
    relations: ['lot'],
  });
  return users;
}





  async getAllUsers(): Promise<Users[]> {
    return this.usersRepository.find();  
  }



  async display_server(): Promise<Server[]> {
    return this.serverRepository.find(); 
  }

  
  async display_lot(): Promise<Lot[]> {
    return this.lotRepository.find(); 
  }
  

  async create_lot(createLotDto: Lot): Promise<Lot> {
    const lot = this.lotRepository.create(createLotDto);  
    return await this.lotRepository.save(lot);  
  }


// Controller method


// Service method
async insertBulk(data: any[]): Promise<Users[]> {
  const users = data.map(({ name, lat, long, elevation, lot_id }) => {  // Add lot_id here
    const user = new Users();
    user.corner = name;  // Assuming "name" is the "corner" in your Users entity

    try {
      // Handle lat-long as either combined or separate values
      if (typeof lat === 'string' && lat.includes(',')) {
        const [latPart, longPart] = lat.split(',').map(s => s.trim());
        user.lat = parseFloat(latPart);
        user.long = parseFloat(longPart);
      } else {
        user.lat = parseFloat(lat);
        user.long = parseFloat(long);
      }

      // Elevation: optional and nullable
      user.elevation =
        elevation !== undefined && elevation !== ''
          ? parseFloat(elevation)
          : null;

      // Assign lot_id to the user
      user.lot_id = lot_id; // Assign the lot_id here

      // Validation
      if (isNaN(user.lat) || isNaN(user.long)) {
        throw new Error(`Invalid coordinates: ${lat}, ${long}`);
      }

      if (user.elevation !== null && isNaN(user.elevation)) {
        throw new Error(`Invalid elevation: ${elevation}`);
      }

      // If validation passes, return the user object
      return user;
    } catch (err) {
      console.error('Error processing row:', { name, lat, long, elevation, lot_id });
      throw err;
    }
  });

  // Save all users to the database
  return this.usersRepository.save(users);
}

>>>>>>> Stashed changes

  async insertBulk(data: any[]): Promise<Users[]> {
    const users = data.map(([corner, lat, long]) => {
      const newUser = new Users();
      newUser.corner = corner;
      newUser.lat = parseFloat(lat);
      newUser.long = parseFloat(long);
      return newUser;
    });
    return this.usersRepository.save(users);
  }



   async more_data(user: Partial<Users>): Promise<Users> {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }
  async delete(id: number): Promise<void> {
    await this.usersRepository.softDelete(id);
  }


}
