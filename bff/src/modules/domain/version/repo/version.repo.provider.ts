import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import Version from '../version.entity';
import { DATA_SOURCE } from '../../../common/database/database.constants';

export const VERSION_REPO = 'VERSION_REPO';
export const versionRepoProviders: Provider[] = [
  {
    provide: VERSION_REPO,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Version),
    inject: [DATA_SOURCE],
  },
];
