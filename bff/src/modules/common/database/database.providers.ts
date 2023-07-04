import { DataSource } from 'typeorm';
import { Provider } from '@nestjs/common';
import { DATA_SOURCE } from './database.constants';
import dataSourceOptions from './config/dataSourceConfig';

export const databaseProvider: Provider = {
  provide: DATA_SOURCE,
  useFactory: async (): Promise<DataSource> => {
    const dataSource = new DataSource(dataSourceOptions);
    return dataSource.initialize();
  },
};
