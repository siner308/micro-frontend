import { Module } from '@nestjs/common';
import { VersionRepo } from './version.repo';
import { versionRepoProviders } from './version.repo.provider';

@Module({
  providers: [VersionRepo, ...versionRepoProviders],
  exports: [VersionRepo],
})
export class VersionRepoModule {}
