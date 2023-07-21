import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import BaseEntity from '../../common/database/entity/base.entity';
import Application from 'src/modules/domain/application/application.entity';
import Deployment from 'src/modules/domain/deployment/deployment.entity';

@Entity('version')
export default class Version extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'url', length: 2048 })
  url: string;

  @Column({ name: 'module' })
  module: string;

  @ManyToOne(() => Application, (application) => application.versions, {
    cascade: true,
  })
  @JoinColumn({
    name: 'application_id',
    referencedColumnName: 'id',
  })
  application: Application;

  @Column({ name: 'application_id' })
  applicationId: number;

  @OneToMany(() => Deployment, (deployment) => deployment.version)
  deployments: Deployment[];
}
