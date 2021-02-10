import {
    Entity,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { BaseModel } from './BaseModel';
import { User } from './User';

@Entity()
export class JWT extends BaseModel {

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

    @Column()
    token!: string;

    @Column({ type: 'date' })
    issued_at!: Date;

    @Column({ type: 'date' })
    expired_at!: Date;

    constructor(user: User, token: string) {
        super();
        this.user = user;
        this.token = token;
        this.issued_at = new Date();
    }
}
