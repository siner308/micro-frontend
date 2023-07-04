import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/common/database/database.module';
import { ApplicationModule } from './modules/domain/application/application.module';
import { DeploymentModule } from './modules/domain/deployment/deployment.module';
import { EnvironmentModule } from './modules/domain/environment/environment.module';
import { VersionModule } from './modules/domain/version/version.module';

@Module({
  imports: [
    DatabaseModule,
    ApplicationModule,
    DeploymentModule,
    EnvironmentModule,
    VersionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
