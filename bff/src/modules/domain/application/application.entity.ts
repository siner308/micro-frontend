import { Column, Entity, OneToMany } from 'typeorm';
import BaseEntity from '../../common/database/entity/base.entity';
import Version from '../version/version.entity';

@Entity('application')
export default class Application extends BaseEntity {
  @Column()
  name: string;

  @Column({ name: 'path_prefix' })
  pathPrefix: string;

  @OneToMany(() => Version, (version) => version.application)
  versions: Version[];
}
