import { PrimaryGeneratedColumn, BaseEntity } from "typeorm";

export class BaseModel extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;
}