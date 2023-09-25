import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DEVICE_STATUS } from './types';

@Entity('device')
export class Device {
  @PrimaryGeneratedColumn('uuid')
  device_code: string;

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
  dateOfIssue: Date;

  @Column({
    nullable: true,
  })
  user: string;
}
