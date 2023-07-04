import { Column, Entity } from 'typeorm';
import BaseEntity from '../../common/database/entity/base.entity';

@Entity('application')
export default class Application extends BaseEntity {
  @Column()
  name: string;
}
