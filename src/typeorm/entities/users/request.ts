import { PrimaryColumn, Entity, Column, ManyToOne } from 'typeorm';
import { ABSENT_REQUEST } from './types';
import { User } from './User';

@Entity('absent-request')
export class Request {
  @PrimaryColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  main_point: string;

  @Column()
  date_of_absence: Date;

  @Column()
  reason: string;

  @Column()
  request_date: Date;

  @Column()
  is_accepted: ABSENT_REQUEST;

  @Column()
  approved_date: Date;

  @ManyToOne(() => User, (user) => user.requests)
  user: User;
}
