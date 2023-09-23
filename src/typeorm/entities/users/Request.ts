// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
// import { Language } from './types';

// @Entity('absent_request')
// export class Request {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   userId: string;

//   @Column()
//   password: string;

//   @Column({
//     nullable: true,
//     unique: true,
//   })
//   username: string;

//   @Column({
//     nullable: true,
//   })
//   name: string;

//   @Column({
//     default: 'en-US' as Language,
//     length: 15,
//   })
//   language: string;

//   @Column({
//     unique: true,
//     nullable: true,
//   })
//   phoneNumber: string;

// }
