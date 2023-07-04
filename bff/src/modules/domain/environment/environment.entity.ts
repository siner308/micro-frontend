import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import BaseEntity from '../../common/database/entity/base.entity';
import Application from 'src/modules/domain/deployment/deployment.entity';
import Deployment from 'src/modules/domain/deployment/deployment.entity';

@Entity('environment')
export default class Environment extends BaseEntity {
  @OneToMany(() => Deployment, (deployment) => deployment.environment, {
    cascade: true,
  })
  deployments: Deployment[];
}
