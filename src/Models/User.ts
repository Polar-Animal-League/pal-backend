import {
    Entity,
    Column,
    Index,
} from 'typeorm';
import { BaseModel } from './BaseModel';

@Entity()
export class User extends BaseModel {

    @Column({ length: 32 })
    @Index({ unique: true })
    username!: string;

    @Column({ length: 60 })
    password!: string;

    @Column({ length: 320 })
    @Index({ unique: true })
    email!: string;

    public static async findByEmail(email: string): Promise<User | undefined> {
        return await User.findOne({ where: { email: email } });
    }

    public static async findByName(name: string): Promise<User | undefined> {
        return await User.findOne({ where: { username: name } });
    }

    constructor(username: string, password: string, email: string) {
        super();
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
