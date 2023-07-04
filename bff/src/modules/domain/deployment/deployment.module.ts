import { Module } from '@nestjs/common';
import { DeploymentController } from './deployment.controller';
import { DeploymentService } from './deployment.service';
import { DeploymentRepoModule } from './repo/deployment.repo.module';

@Module({
  imports: [DeploymentRepoModule],
  providers: [DeploymentService],
  controllers: [DeploymentController],
})
export class DeploymentModule {}
