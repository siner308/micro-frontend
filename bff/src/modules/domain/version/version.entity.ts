import { Column, Entity, ManyToOne } from 'typeorm';
import BaseEntity from '../../common/database/entity/base.entity';
import Application from 'src/modules/domain/deployment/deployment.entity';

@Entity('version')
export default class Version extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @ManyToOne(() => Application, (application) => application.versions)
  application: Application;
}
