import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity'; // Adjust path as needed

@Entity('Lot')
export class Lot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lot: string;

  @OneToMany(() => Users, (users) => users.lot)
  users: Users[];
}
