import { Module } from '@nestjs/common';
import { VersionController } from './version.controller';
import { VersionService } from './version.service';
import { VersionRepoModule } from './repo/version.repo.module';

@Module({
  imports: [VersionRepoModule],
  providers: [VersionService],
  controllers: [VersionController],
})
export class VersionModule {}
