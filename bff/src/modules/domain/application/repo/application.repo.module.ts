import { Module } from '@nestjs/common';
import { ApplicationRepo } from './application.repo';
import { applicationRepoProviders } from './application.repo.provider';

@Module({
  providers: [ApplicationRepo, ...applicationRepoProviders],
  exports: [ApplicationRepo],
})
export class ApplicationRepoModule {}
