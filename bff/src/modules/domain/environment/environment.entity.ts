import { Column, Entity, OneToMany } from 'typeorm';
import BaseEntity from '../../common/database/entity/base.entity';
import Deployment from 'src/modules/domain/deployment/deployment.entity';

@Entity('environment')
export default class Environment extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @OneToMany(() => Deployment, (deployment) => deployment.environment, {
    cascade: true,
  })
  deployments: Deployment[];
}
