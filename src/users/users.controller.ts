<<<<<<< Updated upstream
import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
=======
import { Controller, Post, Body, Get, Delete, Param, NotFoundException, Put, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { UpdateDataDto } from './dto/create_user.dto';
import * as os from 'os';
import { Lot } from './users.lot';
import { join } from 'path';
import { Response } from 'express';
>>>>>>> Stashed changes

@Controller('data')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}  // Correctly injecting UsersService

  getIPv4Address() {
    const networkInterfaces = os.networkInterfaces();
    

    // If no IPv4 address is found, return a default message
    return 'No IPv4 address found';
  }
  @Get('front')
   redirectToFrontend(@Res() res: Response) {
    return res.redirect('/index.html');
  }

   @Post('server')
  async updateServer(@Body('server') server: string) {
    return this.usersService.upsertServer(server);
  }
  

@Get('cloudflared')
test(){

  }


@Get('join/:id')
async findByLotId(@Param('id') id: number) {
  return this.usersService.findByLotId(+id);
}


  @Get('display_server')
  async display_server() {
    return this.usersService.display_server();
  }

  @Get('display_lot')
  async display_lot() {
    return this.usersService.display_lot();
  }


  
 @Post('insert_lot')
  async insertLot(@Body() createLotDto: Lot) {
    try {
      const lot = await this.usersService.create_lot(createLotDto);
      return { message: 'Lot inserted successfully', lot };
    } catch (error) {
      return { message: 'Error inserting lot', error: error.message };
    }
  }

  // HTTP GET endpoint to retrieve the IP address
  @Get('ip')
  ip() {
    const ip = this.getIPv4Address(); // Get the IPv4 address
    return { ip }; // Return the IP address as JSON
  }

  @Post()
  async create(@Body() body: Partial<Users>) {
    return this.usersService.create(body);
  }

 @Post('more_data')
<<<<<<< Updated upstream
  async insertData(@Body() data: any[]): Promise<Users[]> {
    return this.usersService.insertBulk(data);
  }

  @Get('display_data')
  async display() {
    return this.usersService.getAllUsers();  // Make sure this method is available in UsersService
  }
=======
async insertData(@Body() data: any[]): Promise<Users[]> {
  return this.usersService.insertBulk(data);
}


@Get('display_data')
async display() {
  const users = await this.usersService.getAllUsers();
  console.log('Fetched users:', users);
  return users;
}

>>>>>>> Stashed changes

    @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.usersService.delete(id);
  }
<<<<<<< Updated upstream
=======

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.usersService.findOneById(id);
    if (!data) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return data;
  }

  // PUT /users/:id → update user data
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateDataDto) {
    const updated = await this.usersService.update(id, dto);
    if (!updated) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updated;
  }
  
 


// test to display data

 @Get("test")
 getall(){
 return this.usersService.find();
 }




>>>>>>> Stashed changes
}
