import { DataSourceOptions } from 'typeorm';
import Application from '../../../domain/application/application.entity';
import Deployment from '../../../domain/deployment/deployment.entity';
import Environment from '../../../domain/environment/environment.entity';
import Version from '../../../domain/version/version.entity';

console.log(__dirname);
const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'password',
  database: 'mfe',
  synchronize: true,
  logging: true,
  entities: [Application, Deployment, Environment, Version],
};

export default dataSourceOptions;
