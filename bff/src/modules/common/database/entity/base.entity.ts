import {
  PrimaryGeneratedColumn,
  BaseEntity as TypeormBaseEntity,
  CreateDateColumn,
  UpdateDateColumn, DeleteDateColumn
} from 'typeorm';

export default abstract class BaseEntity extends TypeormBaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id?: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  protected constructor(args?: any) {
    super();
    Object.assign(this, args)
  }
}
