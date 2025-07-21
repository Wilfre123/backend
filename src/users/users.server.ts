import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('server')
export class Server {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  server: String;
}