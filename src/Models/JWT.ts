import {
    Entity,
    Column,
    Index,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    DeleteDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn,
    BeforeInsert
} from 'typeorm';
import { User } from './User';

@Entity()
export class JWT extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

    @Column()
    token!: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp'
    })
    createdAt: Date;

    @Column({ type: 'date' })
    issued_at!: Date;

    @Column({ type: 'date' })
    expired_at!: Date;

    @DeleteDateColumn()
    deleted_at!: Date;

    @BeforeInsert()
    beforeInsert() {
        this.createdAt = new Date();
    }

    constructor(user: User, token: string) {
        super();
        this.user = user;
        this.token = token;
    }
}
