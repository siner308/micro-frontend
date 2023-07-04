import { Repository } from 'typeorm';
import Deployment from '../deployment.entity';
import { Inject, Injectable } from '@nestjs/common';
import { DEPLOYMENT_REPO } from './deployment.repo.provider';

@Injectable()
export class DeploymentRepo {
  constructor(
    @Inject(DEPLOYMENT_REPO)
    private readonly repository: Repository<Deployment>,
  ) {}
}
