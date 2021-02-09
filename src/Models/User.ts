import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 32 })
    @Index({ unique: true })
    username!: string;

    @Column({ length: 60 })
    password!: string;

    @Column({ length: 320 })
    @Index({ unique: true })
    email!: string;

    @DeleteDateColumn()
    deleted_at!: Date

    public static async findByEmail(email: string): Promise<any> {
        const [user, count] = await User.findAndCount({
            where: {
                email: email
            }
        })

        if (count > 0) {
            return user
        }

        return false
    }

    public static async findByName(name: string): Promise<any> {
        const [user, count] = await User.findAndCount({
            where: {
                username: name
            }
        })

        if (count > 0) {
            return user
        }

        return false
    }

    constructor(username: string, password: string, email: string) {
        super();
        this.username = username;
        this.password = password;
        this.email = email;
    }
}