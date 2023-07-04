import { DataSourceOptions } from 'typeorm';

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'password',
  database: 'mfe',
  synchronize: true,
  logging: true,
  entities: [__dirname + '/**/*.entity.ts'],
};

export default dataSourceOptions;
