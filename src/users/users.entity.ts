<<<<<<< Updated upstream
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';
=======
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Lot } from './users.lot'; // Adjust path as needed
>>>>>>> Stashed changes

@Entity('data')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  corner: string;

<<<<<<< Updated upstream
  @Column('double')
  long: number;

  @Column('double')
  lat: number;

 
=======
  @Column()
  lot_id: number;

  @Column('float')
  lat: number;

  @Column('float')
  long: number;

  @Column({ type: 'float', nullable: true })
  elevation: number | null;

  @ManyToOne(() => Lot, (lot) => lot.users)
  @JoinColumn({ name: 'lot_id' }) // 👈 This is the fix
  lot: Lot;
>>>>>>> Stashed changes
}
