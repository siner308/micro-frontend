import { Injectable } from '@nestjs/common';
import { EnvironmentRepo } from './repo/environment.repo';

@Injectable()
export class EnvironmentService {
  constructor(private readonly repository: EnvironmentRepo) {}
}
