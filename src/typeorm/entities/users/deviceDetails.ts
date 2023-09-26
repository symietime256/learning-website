import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Device } from './device';

@Entity('DeviceDetails')
export class DeviceDetails {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Device)
  @JoinColumn()
  device: Device;
}
