import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    ins_datetime: Date;

    @UpdateDateColumn()
    upd_datetime: Date;

    @Column()
    ins_uname: string;

    @Column()
    upd_uname: string;

}