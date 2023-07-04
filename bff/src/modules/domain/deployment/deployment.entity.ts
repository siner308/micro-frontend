import { JoinColumn, Column, Entity, ManyToOne } from 'typeorm';
import BaseEntity from '../../common/database/entity/base.entity';
import Version from 'src/modules/domain/version/version.entity';
import Environment from 'src/modules/domain/environment/environment.entity';

@Entity('deployment')
export default class Deployment extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @ManyToOne(() => Version, (version) => version.application)
  @JoinColumn({
    name: 'version_id',
    referencedColumnName: 'id',
  })
  version: Version;

  @Column({ name: 'version_id' })
  versionId: number;

  @ManyToOne(() => Environment, (environment) => environment.deployments)
  @JoinColumn({
    name: 'environment_id',
    referencedColumnName: 'id',
  })
  environment: Environment;

  @Column({ name: 'environment_id' })
  environmentId: number;
}
