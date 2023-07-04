import { Injectable } from '@nestjs/common';
import { DeploymentRepo } from './repo/deployment.repo';

@Injectable()
export class DeploymentService {
  constructor(private readonly repository: DeploymentRepo) {}

  async getByEnvironmentName(environmentName: string) {
    return this.repository.getByEnvironmentName(environmentName);
  }
}
