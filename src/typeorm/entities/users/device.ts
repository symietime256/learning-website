import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DEVICE_STATUS } from './types';

@Entity('Device')
export class Device {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name_device: string;

  @Column({
    enum: DEVICE_STATUS,
    default: DEVICE_STATUS.AVAILABLE,
  })
  device_status: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    nullable: true,
  })
  quantity: number;
}
