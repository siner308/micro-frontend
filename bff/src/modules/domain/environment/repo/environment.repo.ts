import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import Environment from '../environment.entity';
import { ENVIRONMENT_REPO } from './environment.repo.provider';

@Injectable()
export class EnvironmentRepo {
  constructor(
    @Inject(ENVIRONMENT_REPO)
    private readonly repository: Repository<Environment>,
  ) {}
}
