import { Injectable } from '@nestjs/common';
import { VersionRepo } from './repo/version.repo';

@Injectable()
export class VersionService {
  constructor(private readonly repository: VersionRepo) {}
}
