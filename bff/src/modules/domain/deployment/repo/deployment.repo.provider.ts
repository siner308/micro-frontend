import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import Deployment from '../deployment.entity';
import { DATA_SOURCE } from '../../../common/database/database.constants';

export const DEPLOYMENT_REPO = 'DEPLOYMENT_REPO';
export const deploymentRepoProviders: Provider[] = [
  {
    provide: DEPLOYMENT_REPO,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Deployment),
    inject: [DATA_SOURCE],
  },
];
