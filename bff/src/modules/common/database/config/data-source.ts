import 'reflect-metadata';

import dataSourceOptions from 'src/modules/common/database/config/dataSourceConfig';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;
