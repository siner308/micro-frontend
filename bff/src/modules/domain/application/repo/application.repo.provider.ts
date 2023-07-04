import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import Application from '../application.entity';
import { DATA_SOURCE } from '../../../common/database/database.constants';

export const APPLICATION_REPO = 'APPLICATION_REPO';
export const applicationRepoProviders: Provider[] = [
  {
    provide: APPLICATION_REPO,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Application),
    inject: [DATA_SOURCE],
  },
];
