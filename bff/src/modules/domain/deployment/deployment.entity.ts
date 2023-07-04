import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import BaseEntity from '../../common/database/entity/base.entity';
import Version from 'src/modules/domain/version/version.entity';
import Environment from 'src/modules/domain/environment/environment.entity';

@Entity('deployment')
export default class Deployment extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @OneToMany(() => Version, (version) => version.application, {
    cascade: true,
  })
  versions: Version[];

  @ManyToOne(() => Environment, (environment) => environment.deployments)
  environment: Environment;
}
