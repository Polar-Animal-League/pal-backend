import {
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    DeleteDateColumn
} from 'typeorm';

export class BaseModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp'
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp'
    })
    deleted_at: Date;

    @BeforeInsert()
    beforeInsert() {
        this.createdAt = new Date();
        this.updatedAt = this.createdAt;
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.updatedAt = new Date();
    }

    constructor() {
        super();
    }
}
