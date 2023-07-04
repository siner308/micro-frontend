import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import Environment from '../environment.entity';
import { DATA_SOURCE } from '../../../common/database/database.constants';

export const ENVIRONMENT_REPO = 'ENVIRONMENT_REPO';
export const environmentRepoProviders: Provider[] = [
  {
    provide: ENVIRONMENT_REPO,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Environment),
    inject: [DATA_SOURCE],
  },
];
