import { Module } from '@nestjs/common';
import { DeploymentRepo } from './deployment.repo';
import { deploymentRepoProviders } from './deployment.repo.provider';

@Module({
  providers: [DeploymentRepo, ...deploymentRepoProviders],
  exports: [DeploymentRepo],
})
export class DeploymentRepoModule {}
