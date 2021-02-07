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

    @Column({ length: 40 })
    password!: string;

    @Column({ length: 320 })
    @Index({ unique: true })
    email!: string;

    @CreateDateColumn()
    created_at!: Date

    @UpdateDateColumn()
    updated_at!: Date

    @DeleteDateColumn()
    deleted_at!: Date
}