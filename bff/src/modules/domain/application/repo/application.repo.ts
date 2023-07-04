import { Repository } from 'typeorm';
import Application from '../application.entity';
import { Inject, Injectable } from '@nestjs/common';
import { APPLICATION_REPO } from './application.repo.provider';

@Injectable()
export class ApplicationRepo {
  constructor(
    @Inject(APPLICATION_REPO)
    private readonly repository: Repository<Application>,
  ) {}
}
