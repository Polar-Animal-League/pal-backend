import { Entity, Column, Index, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { BaseModel } from "./BaseModel";
import { User } from "./User";

@Entity()
export class Player extends BaseModel {

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

    @Column({ length: 32 })
    name!: string;

    @DeleteDateColumn()
    deleted_at!: Date
}