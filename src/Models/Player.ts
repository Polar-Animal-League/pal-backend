import {
    Entity,
    Column,
    OneToOne,
    JoinColumn
} from 'typeorm';
import { BaseModel } from './BaseModel';
import { User } from './User';

@Entity()
export class Player extends BaseModel {
    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

    @Column({ length: 32 })
    name!: string;

    constructor(user: User, name: string) {
        super();
        this.user = user;
        this.name = name;
    }
}
