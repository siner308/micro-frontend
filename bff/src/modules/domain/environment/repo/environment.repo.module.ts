import { Module } from '@nestjs/common';
import { EnvironmentRepo } from './environment.repo';
import { environmentRepoProviders } from './environment.repo.provider';

@Module({
  providers: [EnvironmentRepo, ...environmentRepoProviders],
  exports: [EnvironmentRepo],
})
export class EnvironmentRepoModule {}
