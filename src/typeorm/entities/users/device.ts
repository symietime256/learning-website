import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { DEVICE_STATUS } from './types';
import { User } from './User';
import { DeviceDetails } from './deviceDetails';
@Entity('Device')
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

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

  @ManyToOne(() => User, (user) => user.devices)
  user: User;

  @OneToOne(() => DeviceDetails, (deviceDetails) => deviceDetails.device, { cascade: true })
  deviceDetails: DeviceDetails;
}
