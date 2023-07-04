import { Module } from '@nestjs/common';
import { EnvironmentController } from './environment.controller';
import { EnvironmentService } from './environment.service';
import { EnvironmentRepoModule } from './repo/environment.repo.module';

@Module({
  imports: [EnvironmentRepoModule],
  providers: [EnvironmentService],
  controllers: [EnvironmentController],
})
export class EnvironmentModule {}
