import { Repository } from 'typeorm';
import Version from '../version.entity';
import { Inject, Injectable } from '@nestjs/common';
import { VERSION_REPO } from './version.repo.provider';

@Injectable()
export class VersionRepo {
  constructor(
    @Inject(VERSION_REPO) private readonly repository: Repository<Version>,
  ) {}
}
